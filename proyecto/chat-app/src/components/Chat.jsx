// En Chat.js
import React from 'react';

const Chat = ({ chat, onClick, selected }) => {
  return (
    <li
      onClick={onClick}
      className={`cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring focus:border-blue-300 ${
        selected ? 'bg-blue-100 rounded-md m-2 ' : ''
      }`}
    >
      {chat.name}
    </li>
  );
};

export default Chat;
