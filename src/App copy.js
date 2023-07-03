import React from 'react';
//import Carousel from './components/carousels/Carousel';
import './App.css';
import MyComponent from './react-chatbot-kit/MyComponent';
import { About } from './components/pages/About';

import { Routes, Route } from 'react-router-dom';
import { Home } from './components/pages/Home';
import { AreaReservada } from './components/pages/AreaReservada';
import { Prices } from './components/pages/Prices';


function App() {
  return (
    <div className="App">
      <MyComponent />


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/prices' element={<Prices />} />


        <Route path='/area_reservada' element={<AreaReservada />} />
      </Routes>
    </div>
  );
}

export default App;
