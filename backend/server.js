import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ---------------- MONGODB ----------------
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ MongoDB Error:", err.message));

// ---------------- SCHEMA ----------------
const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});

const Message = mongoose.model("Message", messageSchema);

// ---------------- EMAIL SETUP ----------------
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify Email
transporter.verify((error) => {
  if (error) {
    console.log("❌ Email service error:", error.message);
  } else {
    console.log("✅ Email service ready");
  }
});

// ---------------- CONTACT API ----------------
app.post("/send", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false });
    }

    // Save to DB
    await Message.create({ name, email, message });

    // 1️⃣ EMAIL TO ADMIN
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      replyTo: email,
      subject: "📩 New Contact Message",
      html: `
        <h3>New Message Received</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `
    });

    // 2️⃣ AUTO-REPLY EMAIL TO USER
    await transporter.sendMail({
      from: `"Website Support" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "✅ Thank you for contacting us",
      html: `
        <h3>Hello ${name},</h3>
        <p>Thank you for reaching out to us.</p>
        <p>We have received your message and our team will get back to you shortly.</p>
        <br/>
        <p><b>Your Message:</b></p>
        <p>${message}</p>
        <br/>
        <p>Regards,</p>
        <p><b>SDG Website Team</b></p>
      `
    });

    res.json({ success: true });

  } catch (error) {
    console.log("❌ EMAIL ERROR:", error.message);
    res.status(500).json({ success: false });
  }
});

// ---------------- SERVER ----------------
app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on port ${process.env.PORT}`);
});
