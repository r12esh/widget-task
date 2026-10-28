import { useState, useRef, useEffect } from "react";
import "./index.css";

function ChatBox({ onClose }) {
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState("");
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const send = () => {
        const value = text.trim();
        if (!value) return;
        setMessages((prev) => [
            ...prev,
            { id: Date.now(), from: "user", text: value },
            { id: Date.now() + 1, from: "bot", text: value },
        ]);
        setText("");
    };

    return (
        <div className="chat">
            <div className="chat-topbar">
                <span>Help</span>
                <button className="chat-close" onClick={onClose} aria-label="Close chat">
                    ×
                </button>
            </div>

            <div className="chat-messages">
                {messages.map((m) => (
                    <div key={m.id} className={m.from === "user" ? "msg-user" : "msg-bot"}>
                        {m.text}
                    </div>
                ))}
                <div ref={bottomRef} />
            </div>

            <div className="chat-input">
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && send()}
                    placeholder="Type a message..."
                    autoFocus
                />
                <button onClick={send}>Send</button>
            </div>
        </div>
    );
}

export default ChatBox;