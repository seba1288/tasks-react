import { useState } from "react";
import React from "react";


export  function Counter() {
    const [counter,SetCounter] = useState(0)
    function notZero() {
            if(counter != 0) {
                return () => SetCounter((prevCounter)=> prevCounter - 1)
            }
          else {
            return counter
          }


        }
    
    
    return (
        <>
            <div id="CounterMain">
                <div id="Counter" style={{fontSize: '40px'}}>
                    <p>{counter}</p>
                </div>
                <div id="CounterButtons">
                    <button id='button1' onClick={notZero()}> Decrease</button> <button id='button1' onClick={() => SetCounter((prevCounter)=> prevCounter + 1)}>Increase</button>
                </div>
            </div>
        </>

    );
}