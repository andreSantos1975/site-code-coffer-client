import React from 'react'
import './MyAvatar.css'
import avatar from '../../public/img/assistente5.png'

//Essa função é chamado do arquivo config.js
export const MyAvatar = () => {
  return (
    <div className='myavatar'>
      <img src={avatar} alt="Chatbot" className="chatbot-image" style={{ width: '50px', height: '50px' }} />
    </div>
  )
}