import React, { useEffect, useState } from 'react';
import './App.css';
import { isPasswordValid } from './services/passwordvalidator.service';

function App() {
  const [password, setpassword] = useState("")
  const [isPassValid, setisPassValid] = useState(true)
  const  [text, setText] = useState("")
  const [isVisible, setisVisible] = useState(false)

  const handleSubmit = (e:any) =>{
    e.preventDefault();
    
    async function fetchPassword() {
      try {
        const isValid = await isPasswordValid(password)
        if (isValid === "true") {
          setisPassValid(true)
        }else{
          setisPassValid(false)
        }
      } catch (error) {
        console.log(error);
      }
      
    }
    fetchPassword()
    setpassword("")
    setisVisible(true)
  }

  useEffect(()=> {
    if (isPassValid){
      setText("Contraseña valida")
    }else{
      setText("Contraseña no valida")
    }
  }, [isPassValid])

  const handleInputChange = (e: any) => {
    setpassword(e.target.value);
  };

  return (
    <div className="main-container">
      <div className='inputContainer'>
        <input placeholder='password' value={password} onChange={handleInputChange}/>
      </div>
      <div className='button-area'>
        <button onClick={(e) => handleSubmit(e)}>Send</button>
        <button>Clear</button>
      </div>
          {isVisible ? (<div className={isPassValid ? 'success': 'error'}>{text}</div>): null}
        </div>
  );
}

export default App;
