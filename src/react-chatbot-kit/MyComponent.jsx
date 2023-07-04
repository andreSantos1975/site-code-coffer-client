import React, { useState } from 'react';
import './MyComponent.css';
import chatbotImage from '../../public/img/assistente5.png';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from '../config';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';
import { NavbarComponent } from '../components/Navbar/Navbar';

const MyComponent = () => {
  const [showChatbox, setShowChatbox] = useState(false);

  const handleClick = () => {
    setShowChatbox(!showChatbox);
  };

  return (
    <div>
      <NavbarComponent />
      
      <div className={`chatbox ${showChatbox ? '' : 'hidden'}`}>
        <Chatbot
          config={config}
          placeholderText='Digite sua mensagem aqui'
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </div>

      <div className='chatbot-icon' onClick={handleClick}>
        {/* Ícone do chatbot */}
        <img src={chatbotImage} alt="balao-chatbot" className='logo-img' style={{ width: '65px', height: '65px', cursor: 'pointer', marginRight: '6px', marginTop: '-20px', zIndex: '999' }} />
      </div>
    </div>
  );
};

export default MyComponent;
