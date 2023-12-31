import React, { useState, useEffect } from 'react';
import { collection, addDoc, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../main';
import { useAuth } from '../hooks/useAuth';
import MessageInput from './MessageInput';
import MessageBubble from './MessageBubble';

const IndividualChat = ({ chat }) => {
  const [messages, setMessages] = useState([]);
  const { user } = useAuth();
  const messagesRef = collection(db, 'chats', chat.id, 'messages');
  const orderedMessagesQuery = query(messagesRef, orderBy('timestamp'));

  useEffect(() => {
    const unsubscribe = onSnapshot(orderedMessagesQuery, (querySnapshot) => {
      const newMessages = querySnapshot.docs.map((doc) => doc.data());
      setMessages(newMessages);
    });
  
    return () => unsubscribe();
  }, [orderedMessagesQuery]);
  

  const sendMessage = async (newMessage) => {
    await addDoc(messagesRef, {
      text: newMessage,
      sender: user.email,
      timestamp: new Date(),
    });
  };

  return (
    <div className="bg-white p-4">
      <div className="text-2xl font-bold mb-2">{chat.name}</div>
      <div className="max-h-96 overflow-y-auto">
        {messages.map((msg, index) => (
          <MessageBubble
            key={index}
            sender={msg.sender}
            text={msg.text}
            isUser={msg.sender === user.email}
          />
        ))}
      </div>
      <MessageInput onSubmit={sendMessage} />
    </div>
  );
};

export default IndividualChat;
