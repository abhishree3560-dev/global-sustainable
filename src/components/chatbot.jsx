import { useState } from "react";
import "./chatbot.css";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi 👋 I’m SDG Assistant. How can I help you?" }
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const getBotReply = (msg) => {
    msg = msg.toLowerCase();

    if (msg.includes("about"))
      return "This website focuses on Sustainable Development Goals (SDGs) and environmental awareness.";

    if (msg.includes("contact"))
      return "You can contact us at 📧 infosustainable.org@gmail.com";

    if (msg.includes("clean"))
      return "Clean energy means renewable energy like solar, wind, and hydro power ⚡";

    if (msg.includes("sdg"))
      return "SDGs are 17 global goals set by the UN to create a better and sustainable future 🌍";

    return "Sorry, I didn’t understand. Try typing: About / Contact / SDG";
  };

  const sendMessage = (text) => {
    if (!text.trim()) return;

    setMessages((prev) => [...prev, { from: "user", text }]);
    setTyping(true);

    setTimeout(() => {
      const reply = getBotReply(text);
      setMessages((prev) => [...prev, { from: "bot", text: reply }]);
      setTyping(false);
    }, 1000);
  };

  const handleSend = () => {
    sendMessage(input);
    setInput("");
  };

  return (
    <>
      {/* Floating Button */}
      <div className="chat-btn" onClick={() => setOpen(!open)}>
        🤖
      </div>

      {/* Chat Window */}
      {open && (
        <div className="chat-box">
          <div className="chat-header">
            SDG Chatbot
            <span onClick={() => setOpen(false)}>✖</span>
          </div>

          <div className="chat-body">
            {messages.map((m, i) => (
              <div key={i} className={`msg ${m.from}`}>
                {m.text}
              </div>
            ))}
            {typing && <div className="msg bot">Typing...</div>}
          </div>

          {/* FAQ Buttons */}
          <div className="chat-faq">
            <button onClick={() => sendMessage("About")}>About</button>
            <button onClick={() => sendMessage("SDG")}>SDG</button>
            <button onClick={() => sendMessage("Clean Energy")}>Clean Energy</button>
            <button onClick={() => sendMessage("Contact")}>Contact</button>
          </div>

          <div className="chat-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}
