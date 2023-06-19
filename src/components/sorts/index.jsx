import React from 'react';
import style from './sorts.module.scss'
import PlusSVG from '../ui/icons/bluePlus.svg'
import LeftSVG from '../ui/icons/leftSVG.svg'
import CalendarSVG from '../ui/icons/сalendarSVG.svg'
import RightSVG from '../ui/icons/rightSVG.svg'
import SearchSVG from '../ui/icons/searchSVG.svg'
import SortIconSVG from '../ui/icons/sortIconSVG.svg'
import {SortElement} from "../ui/sortElement";
import {sorts} from '../ui/adds/sortElements'


export const Sorts = () => {
  return (
      <div className={style.sorts}>
        <div className={style.top}>
            <div className={style.balance}>
              Баланс: <span>272₽</span>
              <img className={style.plusSVG} src={PlusSVG} alt="plus svg"/>
            </div>
          <div className={style.datePicker}>
            <img className={style.leftSVG} src={LeftSVG} alt="calendar svg"/>
            <img  className={ style.calendarSVG} src={CalendarSVG} alt="calendar svg"/>
            3 дня
            <img className={style.rightSVG} src={RightSVG} alt="calendar svg"/>
          </div>

        </div>
        <div className={style.sortGroup}>
          <div className={style.search}>
            <img className={style.searchSVG} src={SearchSVG} alt="search svg"/>
            Поиск по запросам
          </div>
          <div className={style.types}>
          {
            sorts.map((item, index) => (
                <SortElement text={item} imgSVG={SortIconSVG}/>
            ))
          }
          </div>

        </div>
      </div>
  );
};

