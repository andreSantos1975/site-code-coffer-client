import React from 'react';

const MyCustomAvatar = ({ icon, ...props }) => {
  return (
    <div>
      {/* Renderize o ícone passado como prop */}
      {icon}
      {/* Adicione qualquer outra lógica ou conteúdo personalizado para o avatar */}
      <div>Custom Avatar</div>
    </div>
  );
};

export default MyCustomAvatar;