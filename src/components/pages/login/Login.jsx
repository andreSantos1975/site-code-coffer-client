import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



export const Login = ({ setLogado, onSignOut }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSignOut = () => {
    // Realize a lógica de "Sign Out" aqui, como limpar o estado, remover tokens de autenticação, etc.
    setLogado(false);
    onSignOut();
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
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
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setResponseMessage(data.message);
        setLogado(true); // Atualizar o estado logado para true
        navigate('/'); // Redirecionar para a rota principal após o login
      } else {
        const errorData = await response.json();
        setResponseMessage(errorData.message);
      }

      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
    <>
      <div className='content-container'>
        <div className='content center-content' style={{ marginTop: '68px' }}>

          <div className='content-login'>
            <h1>Inscreva-se e tenha uma prévia do orçamento</h1>
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
                value={password}
                onChange={handlePasswordChange}
              />

              <button className='btn btn-enter' onClick={handleFormSubmit}>
                Entrar
              </button>

              {responseMessage && <p className='response-message text-white'>{responseMessage}</p>}

              <a href='#' className='fogot-password'>
                Esqueceu a senha?
              </a>
              <hr />
              <Link to='/formulario' className='btn btn-enter'>
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
