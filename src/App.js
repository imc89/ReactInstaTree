import React, { useState, useEffect } from 'react';
import desktopImage from './img/desktop.jpg';
import mobileImage from './img/mobile.jpg';
import DecoButton from './components/button/DecoButton';
import FogEffect from './components/fog/FogEffect';

import './App.css';

function App() {
  const imageUrl = useWindowWidth() >= 650 ? desktopImage : mobileImage;

  return (
    <div className="App" style={{backgroundImage: `url(${imageUrl})` }}>
      <FogEffect/>
      <header className="App-header">
        <DecoButton title="_IMC89_" url='https://www.instagram.com/_imc89_/'/>
        <DecoButton title="_IMCURIOSITIES_"url='https://www.instagram.com/_imcuriosities_/'/>
      </header>
    </div>
  );
  
}

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth ] = useState(window.innerWidth);

  useEffect(() => {
      const handleWindowResize = () => {
          setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleWindowResize);
      return () => window.removeEventListener('resize', handleWindowResize);
  },[]);

  return windowWidth;
};

export default App;
