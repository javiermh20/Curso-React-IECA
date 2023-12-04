import React, { useState } from 'react';

const MessageInput = ({ onSubmit }) => {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    if (message.trim() === '') return;
    onSubmit(message);
    setMessage('');
  };

  return (
    <div className="chat-input mt-4 flex">
      <input
        type="text"
        className="flex-1 px-2 py-1 rounded-full border"
        placeholder="Escribe un mensaje..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        onClick={sendMessage}
        className="ml-2 px-4 py-1 bg-blue-500 text-white rounded-full hover:bg-blue-600"
      >
        Enviar
      </button>
    </div>
  );
};

export default MessageInput;
