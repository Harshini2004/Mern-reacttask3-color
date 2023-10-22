import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [currentColor, setCurrentColor] = useState('white');

  const changeColor = (color) => {
    setCurrentColor(color);
  };

  return (
    <div className="App">
      <h1>Color Picker</h1>
      <div
        className="color-container"
        style={{ backgroundColor: currentColor, width: '800px', height: '500px' }}
      ></div>
      <div className="color-buttons">
        <button className='red' onClick={() => changeColor('red')}>Red</button>
        <button className='blue' onClick={() => changeColor('blue')}>Blue</button>
        <button className='green' onClick={() => changeColor('green')}>Green</button>
        <button className='yellow' onClick={() => changeColor('yellow')}>Yellow</button>
        <button className='purple' onClick={() => changeColor('purple')}>Purple</button>
        <button className='pink' onClick={() => changeColor('pink')}>Pink</button>
        <button className='orange' onClick={() => changeColor('orange')}>Orange</button>
        <button className='brown' onClick={() => changeColor('brown')}>Brown</button>
        <button className='black' onClick={() => changeColor('black')}>Black</button>
      </div>
    </div>
  );
};

export default App;

