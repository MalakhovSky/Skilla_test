import React from 'react';
import style from './callsWindow.module.scss'
import {categories} from "../ui/adds/callsCategories";

export const CallsWindow = () => {
  return (
      <div className={style.callsWindow}>
        <div className={style.container}>
          <div className={style.categories}>
            {
            categories.map((item,index)=>(
                <div className={style.category}>{item}</div>
            ))
            }
          </div>
          <div>
            Сегодня
          </div>
          <div>
            разделительное слово
          </div>
          <div>
            Вчера
          </div>
        </div>
      </div>
  );
};


