import React from 'react';
import style from './payment.module.css';

const Payment = () => {
  return (
    <div className={style.first}>
       <div className={style.comp}>
          <div className={style.form}>
             <label htmlFor="" className={style.lable}>Enter the details</label>
               <input type="text" placeholder='Transaction Id' className={style.input} />
                <input type="text" placeholder="RollNo: CSE20/55" className={style.input}/>
                <button className={style.button} type='input'>Submit</button>
          </div>
       </div>
    </div>
  )
}

export default Payment;