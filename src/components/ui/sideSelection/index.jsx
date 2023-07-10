import React, {useState} from 'react';
import style from './sideSelection.module.scss'
import YellowPoint from '../icons/yellowPoint.png'


export const SideSelection = ({icon,text}) => {

  const [clickedStyles, setClickedStyles] = useState(true);

  const handleToggleStyles=()=>{
    setClickedStyles(current => !current)
  }

  return (
      <div onClick={handleToggleStyles} className={clickedStyles ? style.sideSection:`${style.sideSection} ${style.sideSectionActive}`} >
          <img className={style.resultSVG} src={icon} alt="menu icon" />
          <div className={style.text}>{text}</div>
          <img className={style.yellowPoint} src={YellowPoint} alt="yellow point" />
      </div>
  );
};


