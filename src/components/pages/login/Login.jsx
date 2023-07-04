import React from 'react';
import { useState } from 'react';

import './Login.css';


export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Aqui você pode implementar a lógica de envio para o back-end, por exemplo,
    // chamando uma API ou executando alguma ação relacionada ao login.

    console.log('Email:', email);
    console.log('Senha:', password);

     // Redefinindo os campos de entrada para os valores vazios
  setEmail('');
  setPassword('');
  };

  return (
    <>

      <div className='content-container'>
        <div className='content center-content'>
          <h1>Inscreva-se e tenha  uma prévia do orçamento</h1>
          <div className='content-login'>
            <form className='content-login-box form-box'>
              <input
                type='text'
                className='inputs'
                placeholder='Email ou telefone'
                value={email}
                onChange={handleEmailChange}
              />
              <input
                type='password'
                className='inputs'
                placeholder='Senha'
                value={password}
                onChange={handlePasswordChange}
              />

              <button className='btn btn-enter' onClick={handleFormSubmit}>
                Entrar
              </button>

              <a href='#' className='fogot-password'>Esqueceu a senha?</a>
              <hr />
              <button className='btn btn-create-account'>Inscreva-se</button>
            </form>
            <p><strong>Crie um site</strong> e fortaleça a marca da sua empresa</p>
          </div>
        </div>
      </div>
    </>
  );
}