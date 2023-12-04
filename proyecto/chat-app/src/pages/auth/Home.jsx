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
    <div className="flex text-center text-black">
      {/* Aside for Chats */}
      <aside className="p-4 border-r">
        {/* Pasa la función de manejo de selección como prop al GroupChatList */}
        <GroupChatList onChatSelect={handleChatSelection} />
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4">
        <h1 className="text-3xl font-bold mb-4">
          Bienvenido a la aplicación de chat de javiermh.
        </h1>
        <p className="text-lg">
          {selectedChat ? (
            <IndividualChat chat={selectedChat} />
          ) : (
            'Selecciona un chat de la izquierda para comenzar.'
          )}
        </p>
      </main>
    </div>
  );
};

export default Home;
