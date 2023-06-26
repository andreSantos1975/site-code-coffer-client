import React, { useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {

    socket.emit('postUser', { message });
  };

  const handleRasaResponse = (rasaResponse) => {
    // Chame a função handleBotResponse do ActionProvider passando a resposta do Rasa
    
    actions.handleBotResponse(rasaResponse);
  };

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