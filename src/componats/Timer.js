import React from 'react';
import { useTimer } from 'react-timer-hook';
import {Link } from "react-router-dom";
//https://www.npmjs.com/package/react-timer-hook

const Timer =(props)=>{

        const {expiryTimestamp,class_end_time ,roomid, class_id,user_id} = props;
         //  console.log(class_end_time); 
        let d1  =  new Date();
        let d2 = new Date(class_end_time);
        //console.log(d1+'1111111111'); 
        //console.log(d2+'222222222222'); 
        let classFinish = false;
        if(d1>d2){
            classFinish = true;    
        }

        const {
          seconds,
          minutes,
          hours,
          days,
          isRunning,
          start,
          pause,
          resume,
          restart,
        } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
        //      <p>{isRunning ? 'Running' : 'Not running'}</p>


		return (
           
            <div className="sc-eCssSg jPSTme" style={{textAlign: 'center'}}>
                { isRunning &&
                <div className="take_btn" style={{fontSize: '20px'}}>
                   <div > <span>Days </span> <div><span>{days}</span> </div> </div>:<div> <span>Hours </span> <div><span>{hours}</span></div> </div>:<div> <span>Minutes </span> <div><span>{minutes}</span></div> </div>:<div> <span>Seconds </span> <div><span>{seconds}</span></div> </div>
                </div>
                }
                { !isRunning && !classFinish &&

                    <a target="_new" className="take_btn" href={`https://take5music.in/take5app1/desktopapp/teacher/classroom.php?id=`+roomid+'&cls='+class_id+'&stu='+user_id+'&status=1'}>Join Class <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.63717 5L0.29821 1.34751C0.149339 1.18474 0.150858 0.924314 0.301248 0.761547L0.89825 0.121872C1.05168 -0.0408945 1.29777 -0.0408945 1.44968 0.1235L5.69857 4.70539C5.77452 4.78677 5.8125 4.89257 5.8125 5C5.8125 5.10743 5.77452 5.21322 5.69857 5.29461L1.44968 9.8765C1.29777 10.0409 1.05168 10.0409 0.89825 9.87813L0.301248 9.23845C0.150858 9.07569 0.149339 8.81526 0.29821 8.65249L3.63717 5Z" fill="white"/></svg></a>
                }

                { classFinish &&
                    <p className="btn btn-sm bg-danger-light">{classFinish ? 'End class' : ''}</p>
                } 
                
                
                </div>
            
         );
	
}
export default Timer;