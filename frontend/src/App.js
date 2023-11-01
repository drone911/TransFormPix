import Header from './components/Header'
import ImagesSelect from './components/ImagesSelect';
import Transform from './components/Transform'
import LoadingScreen from './components/Loading';

import './App.css';

import React, { useState, useEffect } from 'react';

function App() {
  const SwitchViewThres = 768;
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [activeComponent, setActiveComponent] = useState('ImageSelect');

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  function showImageSelect() {
    if(screenWidth >= SwitchViewThres) {
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setActiveComponent('ImageSelect');
      setIsLoading(false);
    }, 2000);
  }

  function showTransform() {
    if(screenWidth >= SwitchViewThres) {
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setActiveComponent('Transform');
      setIsLoading(false);
    }, 2000);
  }

  return (
    <div className="app">

      <div className='header'>
        <Header />
      </div>
      <div className="container">
        {isLoading && <LoadingScreen />}
        {!isLoading && (activeComponent === 'ImageSelect' || screenWidth >= SwitchViewThres) && <ImagesSelect/> }
        {!isLoading && (activeComponent === 'Transform' || screenWidth >= SwitchViewThres) && <div onClick={showImageSelect}><Transform /></div>}

      </div>
    </div>
  );
}
export default App;
