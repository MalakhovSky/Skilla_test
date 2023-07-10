import React from 'react';
import style from './callsWindow.module.scss'
import {categories} from "../ui/adds/callsCategories";
import {Call} from "../call";
import {useSelector} from "react-redux";



export const CallsWindow = () => {

  let data
  const calls = useSelector(state => state.callSlice.calls)
  const filterCondition = useSelector(state => state.callSlice.filterCondition)

  if (filterCondition !== undefined) {
    data = calls?.filter((call) => call.in_out === filterCondition)
  } else {
    data = calls
  }

  //Звонки Сегодня
  // const filterToday = (сalls) => {
  //   return data?.filter(function (el) {
  //     return el.date_notime == new Date().toISOString().slice(0,10);
  //   })
  // }
  //Звонки Завтра
  // const filterTomorrow = (calls) => {
  //   return data?.filter(function (el) {
  //     return +el.date_notime !== new Date().toISOString().slice(0,10)
  //   })
  // }




  return (
      <div className={style.callsWindow}>
        <div className={style.container}>
          <div className={style.categories}>
            {
              categories.map((item, index) => (
                  <div key={index} className={style.category}>{item}</div>
              ))
            }
          </div>
          <div>
            {
              data?.map(call => (
                  <Call key={call.id}
                        status={call.status}
                        employee={call.person_avatar}
                        type={call.in_out}
                        time={call.date.slice(10, 16)}
                        phoneNumber={call.from_number}
                        from={call.partner_data.name}
                        progress={call.time}
                        partnerId={call.partnership_id}
                        recordId={call.record}/>))

               // filtred?.map(call => (
               //    <Call key={call.id}
               //          status={call.status}
               //          employee={call.person_avatar}
               //          type={call.in_out}
               //          time={call.date.slice(10, 16)}
               //          phoneNumber={call.from_number}
               //          from={call.partner_data.name}
               //          progress={call.time}
               //          partnerId={call.partnership_id}
               //          recordId={call.record}/>))
            }
          </div>
          <div className={style.tomorrow}>вчера <span>0</span></div>
          <div>
            {/*{*/}
            {/*  tomorrow?.map(call => (*/}
            {/*      <Call key={call.id}*/}
            {/*            status={call.status}*/}
            {/*            employee={call.person_avatar}*/}
            {/*            type={call.in_out}*/}
            {/*            time={call.date.slice(10, 16)}*/}
            {/*            phoneNumber={call.from_number}*/}
            {/*            from={call.partner_data.name}*/}
            {/*            progress={call.time}*/}
            {/*            partnerId={call.partnership_id}*/}
            {/*            recordId={call.record}/>*/}

            {/*  ))*/}
            {/*}*/}
          </div>
        </div>
      </div>
  );
};


