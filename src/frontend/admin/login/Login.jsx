import React from 'react';
import style from './login.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [ isActive, setIsactive] = useState('false');
  const handleClick =() =>{
    setIsactive();
  }; 
  const navigate = useNavigate();
  const change =() =>{
    let path = `/stuhome`;
    navigate(path);
  }
  return (
    
    <>

    <div className={style.container}>
        <div className={style.form}>
                <label className={style.lable}>Login to your dashboard</label>
                <input type="text" className={style.input} placeholder="user id" onClick={handleClick} style={{
                  border: isActive? "0":""
                }} />
                <input type="password" className={style.input} placeholder="password" onClick={handleClick} style={{
                  border: isActive? "0":""
                }} />
                <button className={style.button} onClick={change} >Login</button>

        </div>
    </div>
    </>
  )
}

export default Login;