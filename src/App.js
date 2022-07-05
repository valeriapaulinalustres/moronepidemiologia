import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  Sifilis  from './pages/sifilis/Sifilis'
import  Tbc  from './pages/tbc/Tbc'

// styles
//import './style.scss';

// components
import Home from './pages/home/Home';
import HeaderMenu from './header/HeaderMenu';
import Navbar from './header/Navbar';
import Header from './header/Header'

const App = () => {
  
  //const [menu, setMenu] = useState(false)
  return (
    <BrowserRouter>
      <div className="App container">
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sifilis" element={<Sifilis />} />
          <Route path="/tbc" element={<Tbc />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
