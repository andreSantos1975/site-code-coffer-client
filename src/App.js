import React from 'react';
import { Navigate } from 'react-router-dom';
//import Carousel from './components/carousels/Carousel';
import './App.css';
import MyComponent from './react-chatbot-kit/MyComponent';
import { useState } from 'react';

import { Routes, Route } from 'react-router-dom';
import { Home } from './components/pages/Home';
import { AreaReservada } from './components/pages/AreaReservada';
import { Prices } from './components/pages/Prices';
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
        <Route path='/prices'
          element={
            logado ? <Prices /> : <Navigate to='/' />} />
        <Route path='/area_reservada'
          element={
            logado ? <AreaReservada /> : <Navigate to='/' />} />
      </Routes>
    </div>
  );
}

export default App;
