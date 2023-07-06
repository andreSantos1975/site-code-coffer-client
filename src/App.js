import React from 'react';
import { Form, Navigate } from 'react-router-dom';
import './App.css';
import MyComponent from './react-chatbot-kit/MyComponent';
import { useState } from 'react';

import { Routes, Route } from 'react-router-dom';
import { Home } from './components/pages/Home';
//import { AreaReservada } from './components/pages/AreaReservada';
import { About } from './components/pages/About';
import { Login } from './components/pages/login/Login';
import { Formulario } from './components/pages/formulario/Formulario';


function App() {

  const [logado] = useState(true);
  return (
    <div className="App">
      <MyComponent />

      {/*Os LINKS estão no componente Navbar
      a rota /formulario é chamada em um button no arquivo Login.jsx
      */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/formulario' element={<Formulario />} />


     
        <Route path='/login'
          element={
            logado ? <Login /> : <Navigate to='/' />} />

      </Routes>
    </div>
  );
}

export default App;
