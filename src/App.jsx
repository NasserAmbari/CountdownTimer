import React, { useEffect,useState } from 'react';

import Time from './components/Time.jsx';
import '../src/App.css';

const App = () => {

   const [day, setDay] = useState(0);
   const [hour, setHours] = useState(0);
   const [second, setSecond] = useState(0);
   const [minute, setMinute] = useState(0);

   const newYears    = new Date(`1 Jan, 2021`);

   const setTheTimer = () => {
      const currentTime = new Date().getTime();
      const distance    = currentTime - newYears;

      const newDay      = Math.abs(Math.floor(distance / (1000 * 60 * 60 * 24)));
      const newHour     = Math.abs(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      const newMinute   = Math.abs(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      const newSecond   = Math.abs(Math.floor((distance % (1000 * 60)) / 1000));

      return [newDay, newHour, newMinute, newSecond]
   }

   useEffect(()=>{
      //ComponentDidMount
      const interval = setInterval(()=>{

         const [newDay, newHour, newMinute, newSecond] = setTheTimer();

         setDay(newDay);
         setHours(newHour);
         setMinute(newMinute);
         setSecond(newSecond); 

      },1000);

      //ComponentWillUnmount
      return () => { clearInterval(interval) }


   },[day,hour,minute,second]);

   return (
      <div className="container">
         <h1>
            ITS GOING NEW YEARS
         </h1>
         <div className="countdown">

            <Time titleCountdown={`Days`} timeCountdown={day} ></Time>

            <Time titleCountdown={`Hours`} timeCountdown={hour} ></Time>

            <Time titleCountdown={`Mins`} timeCountdown={minute} ></Time>

            <Time titleCountdown={`Secs`} timeCountdown={second} ></Time>

         </div>
      </div>
   )

}

export default App;