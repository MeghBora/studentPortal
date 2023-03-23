import React from 'react';
import Payment from '../components/Payment';
import style from './student.module.css';

const StuHome = () => {
  
  return (
    <>
     <div className={style.first}>
        <div className={style.left}>
            <div className={style.links}>
                <div className={style.link} ><button className={style.but} id='1' >Payment</button></div>
                <div className={style.link} ><button className={style.but} id='2' >Recipt</button></div>
                <div className={style.link} ><button className={style.but} id='3' >status</button></div>
                <div className={style.link} ><button className={style.but} id='4' >info</button></div>
            </div>
         </div>
         <div className="comp">
          <Payment />
         </div>
     </div>
    </>
  )
}

export default StuHome;