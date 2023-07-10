import RedArrowOut from "../icons/redArrowOut.png";
import BlueArrow from "../icons/blueArrow.png";
import GreenArrow from "../icons/greenArrow.png";
import RedArrowIn from "../icons/redArroyIn.png";

import React from "react";

export const callStatusType = (status,type) =>{
  // if (status !== 'Дозвонился') {
  //   return <img src={RedArrow} alt="Красная стрелка"/>
  // } else {
  //   if (type === 1) {
  //     return <img src={BlueArrow} alt="Голубая стрелка"/>
  //   } else {
  //     return <img src={GreenArrow} alt="Зеленая стрелка"/>
  //   }
  // }
 if(status === 'Дозвонился'){
    if(type === 1){
      return <img src={BlueArrow} alt="Голубая стрелка"/>
    }
    else{
      return <img src={GreenArrow} alt="Зеленая стрелка"/>
    }
 }  if(status !== 'Дозвонился'){
     if(type === 1){
       return <img src={RedArrowIn} alt="Красная стрелка входящего"/>
     }else{
       return <img src={RedArrowOut} alt="Красная стрелка изходящего"/>
     }
  }
}

