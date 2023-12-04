import React from 'react';

const MessageBubble = ({ sender, text, isUser }) => {
  const messageContainerStyle = {
    display: 'flex',
    justifyContent: isUser ? 'flex-end' : 'flex-start',
    marginBottom: '10px',
  };

  const messageBubbleStyle = {
    maxWidth: '70%',
    padding: '10px',
    borderRadius: '10px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    backgroundColor: isUser ? '#2196F3' : '#f0f0f0',
    color: isUser ? '#ffffff' : '#333333',
  };

  return (
    <div style={messageContainerStyle}>
      <div style={messageBubbleStyle}>
        <p className="font-bold">{sender}:</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default MessageBubble;
