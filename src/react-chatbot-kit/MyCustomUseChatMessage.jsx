import React from 'react';

const MyCustomUserChatMessage = ({ message }) => {
  return (
    <div>
      {/* Renderize o conteúdo da mensagem */}
      <div>{message.text}</div>
      {/* Adicione qualquer outra lógica ou conteúdo personalizado para a mensagem do usuário */}
      <div>MyCustomUserChatMessage</div>
    </div>
  );
};

export default MyCustomUserChatMessage;