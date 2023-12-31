import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const Login = ({ setLogado }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setSenha(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          senha,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setResponseMessage(data.message);
        setLogado(true);
        navigate('/');
      } else {
        const errorData = await response.json();
        setResponseMessage(errorData.message);
      }

      setEmail('');
      setSenha('');
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
    <>
      <div className='content-container'>
        <div className='content center-content' style={{ marginTop: '68px' }}>
          <div className='content-login'>
            <form className='content-login-box form-box'>
              <input
                type='text'
                className='inputs'
                placeholder='Email'
                value={email}
                onChange={handleEmailChange}
              />
              <input
                type='password'
                className='inputs'
                placeholder='Senha'
                value={senha}
                onChange={handlePasswordChange}
              />

              <button className='btn btn-enter rounded-pill text-white' onClick={handleFormSubmit}>
                Entrar
              </button>

              {responseMessage && <p className='response-message'>{responseMessage}</p>}

              <a href='#' className='fogot-password'>
                Esqueceu a senha?
              </a>
              <hr />
              <Link to='/formulario' className='btn btn-enter rounded-pill text-white'>
                Inscreva-se
              </Link>
            </form>
            <p>
              <strong>Crie um site</strong> e fortaleça a marca da sua empresa
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
