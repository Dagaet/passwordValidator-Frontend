import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { isPasswordValid } from './services/passwordvalidator.service';

function App() {
  const [password, setpassword] = useState("")
  const [isPassValid, setisPassValid] = useState(false)

  const handleSubmit = () =>{
    async function fetchPassword() {
      const isValid = await isPasswordValid(password)
      if (isValid === "true") {
        setisPassValid(true)
      }else{
        setisPassValid(false)
      }
    }
    fetchPassword()
    console.log(isPassValid)
  }


  const handleInputChange = (e: any) => {
    setpassword(e.target.value);
  };

  return (
    <div className="main-container">
      <div className='inputContainer'>
        <input placeholder='password' value={password} onChange={handleInputChange}/>
      </div>
      <div className='button-area'>
        <button onClick={handleSubmit}>Send</button>
        <button>Clear</button>
      </div>
      <div className='error' hidden>Error</div>
    </div>
  );
}

export default App;
