import React from 'react';
import style from "./home.module.css";
import Lottie from "lottie-react";
import student from './student.json';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  let navigate = useNavigate();
  const change = () =>{
    let path = `/Login`;
    navigate(path);
  }
  return (
    <>
      <div className={style.first}>
        <div className={style.container}>
            <div className={style.home}>
                    <span className={style.lottie}>
                     <Lottie animationData={student}  loop={true} />
                    </span>
                    <span className={style.text}>
                     <div className={style.innerdiv}>
                        Welcome back.
                        This is your student portal for Satyug Darshan Institute of Engineering and Technologies.
                     </div>
                     <div className={style.afterText}>
                        <button className={style.button} onClick={change}>Login</button>
                     </div>
                    </span>
            </div>
        </div>
      </div>
    </>
  )
}

export default Home