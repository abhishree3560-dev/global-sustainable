import { useEffect, useState } from "react";

const Admin = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/admin/messages")
      .then(res => res.json())
      .then(data => setMessages(data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin Panel</h2>

      {messages.map(msg => (
        <div key={msg._id} style={{
          border: "1px solid #ccc",
          padding: "10px",
          marginBottom: "10px"
        }}>
          <p><b>Name:</b> {msg.name}</p>
          <p><b>Email:</b> {msg.email}</p>
          <p><b>Message:</b> {msg.message}</p>
        </div>
      ))}
    </div>
  );
};

export default Admin;
