import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="main-container">
      <div className='inputContainer'>
        <input placeholder='password'/>
      </div>
      <div className='button-area'>
        <button>Send</button>
        <button>Clear</button>
      </div>
      <div className='error' hidden>Error</div>
    </div>
  );
}

export default App;
