import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/messages/")
      .then(res => setMessages(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>Messages</h1>

      {messages.map(msg => (
        <p key={msg.id}>{msg.text}</p>
      ))}
    </div>
  );
}

export default App;