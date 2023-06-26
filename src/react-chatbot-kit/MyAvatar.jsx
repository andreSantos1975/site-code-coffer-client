import React from 'react'
import './MyAvatar.css'

//Essa função é chamado do arquivo config.js
export const MyAvatar = () => {
  return (
    <div className='myavatar'>
      <img src={process.env.PUBLIC_URL + '/img/assistente5.png'} alt="Chatbot" className="chatbot-image" style={{ width: '50px', height: '50px' }} />
    </div>
  )
}