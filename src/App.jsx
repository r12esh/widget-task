import { useState } from "react";
import ChatBox from "./Chatbot";
import "./index.css";

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <h1 className="page-title">Spinach Experience Task</h1>

      {open ? (
        <ChatBox onClose={() => setOpen(false)} />
      ) : (
        <button className="help-button" onClick={() => setOpen(true)}>
          Help
        </button>
      )}
    </div>
  );
}
