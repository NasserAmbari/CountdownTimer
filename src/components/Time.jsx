import React from 'react';

const Time = ({ titleCountdown, timeCountdown }) => {
   return(
      <div className="countainer-time days">
         <h6 className="number">
            { timeCountdown }
         </h6>
         <div className="text-countdownTimer">
            { titleCountdown }
         </div>
      </div>
   )
}

export default Time;