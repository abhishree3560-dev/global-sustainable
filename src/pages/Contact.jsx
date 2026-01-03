import axios from "axios";
import { useState } from "react";




function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });


  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/send", formData);
      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      alert("Failed to send message");
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">Contact Us</h2>

      <div className="row align-items-start">
        {/* LEFT SIDE - FORM */}
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                name="phone"
                className="form-control"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <textarea
                name="message"
                className="form-control"
                rows="4"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {success && (
              <p className="text-success fw-bold">
                ✅ Message sent successfully!
              </p>
            )}

            <button className="btn btn-success w-100">
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT SIDE - INFO BOX */}
        <div className="col-md-6 ps-4 mt-4 mt-md-0">
          <div className="contact-info p-5 text-white rounded shadow">
               
            <h4 className="text-center mb-3">🌍 Get in Touch</h4>
            <p className="text-center">
              Let’s work together for a sustainable future.
              Have ideas on clean energy, smart industries,
              or green technology? Let’s discuss.
            </p>
            <hr />
            <center>
            <p>📍 Tamil Nadu, India</p>
            <p>📧 infosustainable.org</p>
            <p>📞 +91 98765 XXXXX</p>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
