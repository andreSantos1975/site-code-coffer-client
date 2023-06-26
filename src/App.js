//import Carousel from './components/carousels/Carousel';
import './App.css';
import MyComponent from './react-chatbot-kit/MyComponent';
import { About } from './components/pages/About';

import { Routes, Route } from 'react-router-dom';
import { Home} from './components/pages/Home';


function App() {
  return (
    <div className="App">
      <MyComponent />
  
     
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    </Routes>
    </div>
  );
}

export default App;
