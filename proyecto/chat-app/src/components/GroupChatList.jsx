import React, { useState, useEffect } from "react";
import { useChatsApi } from "../hooks/useChatsApi";
import Chat from "./Chat";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const GroupChatList = ({ onChatSelect }) => {
  const { data: chats, loading, error, getChats, addChat, deleteChat } = useChatsApi();
  const [selectedChat, setSelectedChat] = useState(null);
  const [isCreatingChat, setIsCreatingChat] = useState(false);
  const [newChatName, setNewChatName] = useState("");

  useEffect(() => {
    const unsubscribe = getChats();
    return () => {
      if (unsubscribe && typeof unsubscribe === "function") {
        unsubscribe();
      }
    };
  }, []);

  const handleChatClick = (chat) => {
    onChatSelect({ ...chat, name: chat.name });
    setSelectedChat(chat.id);
  };

  const handleCreateChatClick = () => {
    setIsCreatingChat(true);
  };

  const handleCreateChat = () => {
    if (newChatName.trim() !== "") {
      addChat(newChatName);
      setNewChatName("");
      setIsCreatingChat(false);
    }
  };

  const handleDeleteChat = (chat) => {
    console.log("eliminando " + chat.name);
    deleteChat(chat);
  }

  return (
    <div className="p-4 bg-white shadow-md rounded-xl">
      <h1 className="text-3xl font-bold mb-4">Chats</h1>
      {loading && <p className="text-gray-500">Cargando...</p>}
      {error && <p className="text-red-500">Hubo un error</p>}
      {chats && (
        <ul>
          {chats.map((chat) => (
            <div key={chat.id} className="flex items-center justify-between">
              <Chat
                chat={chat}
                onClick={() => handleChatClick(chat)}
                selected={selectedChat === chat.id}
              />
              <FontAwesomeIcon icon={faTrash} onClick={() => handleDeleteChat(chat)} />
            </div>
          ))}
        </ul>
      )}
      <div className="mt-4">
        <button
          className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:border-blue-300"
          onClick={handleCreateChatClick}
        >
          Crear nuevo chat
        </button>
      </div>
      {isCreatingChat && (
        <div className="mt-4 flex items-center">
          <input
            type="text"
            className="border rounded py-2 px-3 focus:outline-none focus:ring focus:border-indigo-300 flex-1"
            placeholder="Nombre del nuevo chat"
            value={newChatName}
            onChange={(e) => setNewChatName(e.target.value)}
          />
          <button
            className="ml-2 px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:border-indigo-300"
            onClick={handleCreateChat}
          >
            Crear
          </button>
        </div>
      )}
    </div>
  );
};

export default GroupChatList;
