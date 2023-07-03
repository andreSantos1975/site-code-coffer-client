import React from 'react';
import { Navigate } from 'react-router-dom';
import './App.css';
import MyComponent from './react-chatbot-kit/MyComponent';
import { useState } from 'react';

import { Routes, Route } from 'react-router-dom';
import { Home } from './components/pages/Home';
import { AreaReservada } from './components/pages/AreaReservada';
import { Prices_Form } from './components/pages/Prices_Form';
import { About } from './components/pages/About';


function App() {

  const [logado] = useState(true);
  return (
    <div className="App">
      <MyComponent />

       {/*Os LINKS estão no componente Navbar*/}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/prices_form'
          element={
            logado ? <Prices_Form /> : <Navigate to='/' />} />
        <Route path='/area_reservada'
          element={
            logado ? <AreaReservada /> : <Navigate to='/' />} />
      </Routes>
    </div>
  );
}

export default App;
