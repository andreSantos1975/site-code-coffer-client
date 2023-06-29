// in config.js
import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';
//import { BsRobot } from 'react-icons/bs';
//import MyCustomAvatar from '../components/MyCustomAvatar';
//import MyCustomUserChatMessage from '../components/MyCustomUserChatMessage';
//import MyCustomChatMessage from '../components/MyCustomChatMessage';
import { MyAvatar } from './react-chatbot-kit/MyAvatar';


const botName = 'Como posso ajudar';

const config = {
    initialMessages: [createChatBotMessage(`Olá! ${botName}`)],
    customComponents: {
      // Substitui o cabeçalho padrão
      header: () => <div style={{ backgroundColor: '#A9A9A9', padding: "9px", borderRadius: "3px" }}>Assistente Virtual</div>,
      // Substitui o avatar padrão do bot
      botAvatar: (props) => <MyAvatar  {...props} />
     
      // Substitui o contêiner padrão da mensagem do bot
     /// botChatMessage: (props) => <MyCustomChatMessage icon={<FaIconName />} {...props} />,
      // Substitui o ícone padrão do usuário
      ///userAvatar: (props) => <MyCustomAvatar icon={<FaIconName />} {...props} />,
      // Substitui a mensagem padrão do usuário
      ///userChatMessage: (props) => <MyCustomUserChatMessage  icon={<FaIconName />} {...props} />
    },
//Cor na fala do chatbot e no balão de enviar a mensagem
    customStyles: {
      botMessageBox: {
        backgroundColor: 'gray',
      },
      chatButton: {
        backgroundColor: 'gray',
      },
    },

  };
  

export default config;