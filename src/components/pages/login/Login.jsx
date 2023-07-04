import React from 'react'

import './Login.css'


export const Login = () => {
  return (
    <>
     
     <div className='content-container'>
     <div className='content center-content'>
      <h1>Inscreva-se e tenha  uma prévia do orçamento</h1>
        <div className='content-login'>
          <form className='content-login-box form-box'>
            <input type='text' className='inputs' placeholder='Email ou telefone' />
            <input type='password' className='inputs' placeholder='Senha' />
            <button className='btn btn-enter'>Entrar</button>
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