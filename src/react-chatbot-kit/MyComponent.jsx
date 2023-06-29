import './MyComponent.css';
import React, { useState } from 'react';
import chatbotImage from '../../public/img/assistente5.png';
//import { FaComment } from 'react-icons/fa';
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from '../config';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';
import { NavbarComponent } from '../components/Navbar/Navbar';
//import  CarouselComponent from '../components/carousels/Carousel'




const MyComponent = () => {
  const [showChatbox, setShowChatbox] = useState(false);

  const handleClick = () => {
    setShowChatbox(!showChatbox);
  };

  return (
    <div>
      <NavbarComponent />
    
      {/*<BsRobot />  usar MyCustomAvatar*/}
      {/*<img src={chatbotImage} alt="Chatbot" className="chatbot-image"  style={{ width: '50px', height: '50px' }}/>  usar MyCustomAvatar*/}
      <div className='chatbot-icon' onClick={handleClick}>
        {/*Imagem do balão para chamar o chatbot*/}
        <img src={chatbotImage} alt="balao-chatbot" className='logo-img' style={{ width: '65px', height: '65px', cursor: 'pointer',  marginRight: '6px', marginTop: '-20px' }} />
        {/*<FaComment style={{ width: '30px', height: '30px', cursor: 'pointer' }} />*/}
      </div>
      < div className={`chatbox ${showChatbox ? '' : 'hidden'}`}>
        <Chatbot
          config={config}
          placeholderText='Digite sua mensagem aqui'
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </div>

    </div>
  );
}

export default MyComponent;