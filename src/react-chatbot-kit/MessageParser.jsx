import React, { useEffect, useContext } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

import { LogadoContexto } from '../context/LogadoContexto';
///Componente do react-chatbot-kit

const MessageParser = ({ children, actions }) => {

  const { logado } = useContext(LogadoContexto);
  console.log('logado no MessageParser:', logado)

  const parse = (message) => {
    console.log('Enviando requisição para o servidor:', message);
    //Fazer uma requisição para o server.js
     socket.emit('postUser', { message, logado });
     console.log('Hello World MessageParse.jsx:', message)
    {/*socket.emit('assistant1', { message });*/}
   
  };

  const handleRasaResponse = (rasaResponse) => {
    // Chame a função handleBotResponse do ActionProvider passando a resposta do Rasa
    
    actions.handleBotResponse(rasaResponse);
  };

  //Resposta do Rasa enviada do server.js
  useEffect(() => {
    socket.on('responseUser', handleRasaResponse);
    return () => {
      socket.off('responseUser', handleRasaResponse);
    };
  }, []);

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
        });
      })}
    </div>
  );
};

export default MessageParser;
