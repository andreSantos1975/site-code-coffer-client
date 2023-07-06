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

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Adicione o console log para verificar os valores do email e password
    console.log('Email:', email);
    console.log('Password:', password);

    try {
      // Fazendo a requisição para a rota de login no backend
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        // Login bem-sucedido, faça algo com a resposta
        const data = await response.json();
        console.log(data.message);
      } else {
        // Login inválido, faça algo com a resposta de erro
        const errorData = await response.json();
        console.error(errorData.message);
      }

      // Redefinindo os campos de entrada para os valores vazios
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
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