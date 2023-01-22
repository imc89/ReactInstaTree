import React, { useState, useEffect } from 'react';
import desktopImage from './img/desktop.jpg';
import mobileImage from './img/mobile.jpg';

import './App.css';

function App() {
  const imageUrl = useWindowWidth() >= 650 ? desktopImage : mobileImage;

  return (
    <div className="App" style={{backgroundImage: `url(${imageUrl})` }}>
      <header className="App-header">
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
