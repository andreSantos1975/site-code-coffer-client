import React, { useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

//Componente do react-chatbot-kit
const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    console.log('Enviando requisição para o servidor:', message);
    //Fazer uma requisição para o server.js
     socket.emit('postUser', { message });
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