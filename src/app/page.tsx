"use client";

import { useState } from "react";

export default function Page() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState(null);

  const onChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const onSend = async () => {
    if (!message) return;

    const response = await fetch(
      "/api/ask",
      {
        method: "POST",
        body: JSON.stringify({
          message,
        }),
      }
    );
    const result = await response.json();
    setResponse(result);
  };

  return (
    <div>
      <h1>Ask something!</h1>
      <div>
        <input type="text" onChange={onChangeMessage} value={message} />
        <button onClick={onSend}>Send</button>
      </div>
      <div>{response && response.message.content}</div>
    </div>
  );
}
