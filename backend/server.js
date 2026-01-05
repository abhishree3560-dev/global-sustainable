import express from "express";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();

/* ======================================================
   ✅ CORS CONFIG (VERY IMPORTANT)
====================================================== */
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "https://global-sustainable-qmkb.vercel.app",
  "https://global-sustainable-bx1u.vercel.app"
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("CORS blocked"));
      }
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

// 🔥 REQUIRED for preflight (fixes your error)
app.options("*", cors());

app.use(express.json());

/* ======================================================
   ✅ MONGODB CONNECTION (ATLAS)
====================================================== */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Error:", err.message));

/* ======================================================
   ✅ SCHEMA
====================================================== */
const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Message = mongoose.model("Message", messageSchema);

/* ======================================================
   ✅ EMAIL SETUP (GMAIL)
====================================================== */
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((error) => {
  if (error) {
    console.log("❌ Email error:", error.message);
  } else {
    console.log("✅ Email service ready");
  }
});

/* ======================================================
   ✅ CONTACT API
====================================================== */
app.post("/send", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields required",
      });
    }

    // Save to MongoDB
    await Message.create({ name, email, phone, message });

    // Admin email
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "📩 New Contact Message",
      html: `
        <h3>New Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    // Auto reply
    await transporter.sendMail({
      from: `"SDG Team" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "✅ Message received",
      html: `
        <p>Hello ${name},</p>
        <p>Thanks for contacting us. We received your message.</p>
        <p><b>Your Message:</b></p>
        <p>${message}</p>
        <br/>
        <p>– SDG Team</p>
      `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.log("❌ Server Error:", error.message);
    res.status(500).json({ success: false });
  }
});

/* ======================================================
   ✅ ROOT TEST ROUTE
====================================================== */
app.get("/", (req, res) => {
  res.send("✅ Backend is running");
});

/* ======================================================
   ✅ SERVER START
====================================================== */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

