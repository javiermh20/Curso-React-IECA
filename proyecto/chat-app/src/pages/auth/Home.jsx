// En Home.js
import React, { useState } from 'react';
import GroupChatList from '../../components/GroupChatList';
import IndividualChat from '../../components/IndividualChat';

const Home = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  const handleChatSelection = (chat) => {
    setSelectedChat(chat);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Aside for Chats */}
      <aside className="w-1/4 p-4 border-r">
        {/* Pasa la función de manejo de selección como prop al GroupChatList */}
        <GroupChatList onChatSelect={handleChatSelection} />
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4">
        <h1 className="text-3xl font-bold mb-4">
          Bienvenido a la aplicación de chat de javiermh.
        </h1>
        <div className="bg-white p-6 rounded-md shadow-md">
          <p className="text-lg">
            {selectedChat ? (
              <IndividualChat chat={selectedChat} />
            ) : (
              'Selecciona un chat de la izquierda para comenzar.'
            )}
          </p>
        </div>
      </main>
    </div>
  );
};

export default Home;
