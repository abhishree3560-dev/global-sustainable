import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";


function Contact() {
  const [formData, setFormData] = useState({
   from_name: "",
   from_email: "",
   from_phone: "",
   message: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .send(
        "service_fn82w9i",
        "template_s6w3pqh",
            
        formData,
        "V6zlGHyYRBj5TW8gM"
      )
      .then(
        () => {
          setSending(false);
          setShowModal(true);

          setFormData({
            from_name: "",
            from_email: "",
            from_phone: "",
            message: "",
          });
        },
        () => {
          setSending(false);
          alert("❌ Failed to send message");
        }
      );
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">Contact Us</h2>

      <div className="row align-items-start">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="from_name"
              className="form-control mb-3"
              placeholder="Your Name"
              value={formData.from_name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="from_email"
              className="form-control mb-3"
              placeholder="Email Address"
              value={formData.from_email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="from_phone"
              className="form-control mb-3"
              placeholder="Phone Number"
              value={formData.from_phone}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              className="form-control mb-3"
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button className="btn btn-success w-100" disabled={sending}>
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        <div className="col-md-6 ps-4 mt-4 mt-md-0">
          <div className="contact-info p-5 text-white rounded shadow">
            <h4 className="text-center mb-3">🌍 Get in Touch</h4>
            <p className="text-center">
              Let’s work together for a sustainable future.
            </p>
            <hr />
            <center>
              <p>📍 Tamil Nadu, India</p>
              <p>📧 info@sustainable.org</p>
              <p>📞 +91 98765 XXXXX</p>
            </center>
          </div>
        </div>
      </div>

      {/* SUCCESS MODAL */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h4>✅ Message Sent Successfully!</h4>
            <p>Thank you for contacting us.</p>
            <button
              className="btn btn-success mt-3"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;

