import React from 'react';
import { Navigate } from 'react-router-dom';
import './App.css';
import 'react-chatbot-kit/build/main.css';
import { useState, useEffect } from 'react';

import { LogadoContexto } from './context/LogadoContexto';

import { Routes, Route } from 'react-router-dom';
import { Home } from './components/pages/Home';
//import { AreaReservada } from './components/pages/AreaReservada';
import { About } from './components/pages/About';
import { Login } from './components/pages/login/Login';
import { Formulario } from './components/pages/formulario/Formulario';
import { Prices } from './components/pages/Prices';
import { NavbarComponent } from './components/Navbar/Navbar';
import MessageParser from './react-chatbot-kit/MessageParser';

import './react-chatbot-kit/MyComponent.css';
import chatbotImage from '../public/img/assistente5.png';
import Chatbot from 'react-chatbot-kit';
import config from './config';
import ActionProvider from './react-chatbot-kit/ActionProvider';
// Componente CSS do chatbot-kit
import './react-chatbot-kit/MyComponent.css'


function App() {
  const [logado, setLogado] = useState('');
  const [showChatbox, setShowChatbox] = useState(false);

  console.log('logado no App:', logado); // Log do valor de logado ..log

  const handleSignOut = () => {
    setLogado('');
  };

  const handleClick = () => {
    setShowChatbox(!showChatbox);
  };

  useEffect(() => {
    // Aqui você pode realizar qualquer lógica adicional que dependa do valor de logado
    // Por exemplo, se você precisar fazer uma requisição inicial usando logado
    // ou realizar outras ações com base em seu valor.
  }, [logado]);

    


  return (
    <div className="App">
 
      {/*  handleSignOut passada como uma propriedade chamada "onSignOut para o componente NavbarComponent*/}
      <LogadoContexto.Provider value={{ logado, setLogado }}>
        <NavbarComponent logado={logado} setLogado={setLogado} onSignOut={handleSignOut} />

  

        {/* Os LINKS estão no componente Navbar
            A rota /formulario é chamada em um button no arquivo Login.jsx */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/formulario' element={<Formulario />} />
          <Route path='/login' element={<Login setLogado={setLogado} onSignOut={handleSignOut} />} />
          <Route path='/prices' element={logado ? <Prices /> : <Navigate to='/login' />} />
        </Routes>
          
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
        <img src={chatbotImage} alt="balao-chatbot" className='logo-img' style={{ width: '65px', height: '70px', cursor: 'pointer', marginRight: '1px', marginTop: '-20px', zIndex: '999' }} />
      </div>

      </LogadoContexto.Provider>
    </div>
  );
}

export default App;
