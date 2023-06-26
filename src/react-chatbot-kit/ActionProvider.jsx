// in ActionProvider.jsx
import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

 

  const handleBotResponse = (rasaResponse) => {
    const text = rasaResponse[0].text; // Extrai a propriedade text de rasaResponse
  
    const botMessage = createChatBotMessage(text);
  
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  


  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
           handleBotResponse,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;