import React from 'react';
import style from './call.module.css'

export const Call = ({type,time,employee,phoneNumber,from,estimation,progress}) => {
  return (
      <div>
        <div className={style.type}>
          --->
        </div>
        <div className={style.time}>
          19:00
        </div>
        <div >
          Фото
        </div>
        <div className={style.phoneNumber}>
          8 950 541-32-31
        </div>
        <div>
          Оценка
        </div>
        <div>
          Длительность
        </div>
      </div>
  );
};


