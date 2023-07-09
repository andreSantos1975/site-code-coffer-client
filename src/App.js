import React from 'react';
import { Navigate } from 'react-router-dom';
import './App.css';
import MyComponent from './react-chatbot-kit/MyComponent';
import { useState } from 'react';

import { Routes, Route } from 'react-router-dom';
import { Home } from './components/pages/Home';
//import { AreaReservada } from './components/pages/AreaReservada';
import { About } from './components/pages/About';
import { Login } from './components/pages/login/Login';
import { Formulario } from './components/pages/formulario/Formulario';
import { Prices } from './components/pages/Prices';
import { NavbarComponent } from './components/Navbar/Navbar';


function App() {

  const [logado, setLogado] = useState('');

  const handleSignOut = () => {
    setLogado(false);
  };

  return (
    <div className="App">
      <MyComponent />
      {/*  handleSignOut passada como uma propriedade chamada "onSignOu para o componente NavbarComponent*/}
      <NavbarComponent logado={logado} setLogado={setLogado} onSignOut={handleSignOut} />

   
      {/*Os LINKS estão no componente Navbar
      a rota /formulario é chamada em um button no arquivo Login.jsx
      */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/formulario' element={<Formulario />} />
        <Route path='/login' element={<Login setLogado={setLogado} onSignOut={handleSignOut} />} />



        <Route path='/prices'
          element={
            logado ? <Prices /> : <Navigate to='/login' />} />

      </Routes>
    </div>
  );
}

export default App;
