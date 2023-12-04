// En GroupChatList.js
import React, { useEffect, useState } from "react";
import { useChatsApi } from "../hooks/useChatsApi";
import Chat from "./Chat";

const GroupChatList = ({ onChatSelect }) => {
  const { data: chats, loading, error, getChats } = useChatsApi();
  const [selectedChat, setSelectedChat] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const unsubscribe = await getChats();
      return () => {
        if (typeof unsubscribe === "function") {
          unsubscribe();
        }
      };
    };

    fetchData();
  }, []);

  const handleChatClick = (chat) => {
    // Llama a la función proporcionada por Home cuando se hace clic en un chat
    onChatSelect({ ...chat, name: chat.name });
    setSelectedChat(chat.id); // Guarda el ID del chat seleccionado
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h1 className="text-3xl font-bold mb-4">Chats</h1>
      {loading && <p className="text-gray-500">Cargando...</p>}
      {error && <p className="text-red-500">Hubo un error</p>}
      {chats && (
        <ul>
          {chats.map((chat) => (
            <Chat
              key={chat.id}
              chat={chat}
              onClick={() => handleChatClick(chat)}
              selected={selectedChat === chat.id}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default GroupChatList;
