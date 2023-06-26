import React from 'react';

const MyCustomChatMessage = ({ message }) => {
  return (
    <div>
      {/* Renderize o conteúdo da mensagem */}
      <div>{message.text}</div>
    </div>
  );
};

export default MyCustomChatMessage;