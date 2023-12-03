import { useState } from "react";
import React from "react";


export  function MyButton() {
    const [turnedOn,SetturnedON] = useState(false)




    function ButtonON() {
        document.getElementById("but").style.borderColor = "green";
        document.getElementsByClassName('buttonSmall')[0].innerHTML = "turn off"
        document.getElementById("but").innerHTML = "turned on";
        SetturnedON(true)
    }
    function ButtonOFF() {
        document.getElementById("but").style.borderColor = "red";
        document.getElementsByClassName('buttonSmall')[0].innerHTML = "turn on"
        document.getElementById("but").innerHTML = "turned off";
        SetturnedON(false)
    }
    
    return (
        <div className="Button">
            
            <p id="but">turned off</p>
            <button  className='buttonSmall' style={{borderRadius: '12px'}} onClick={() => {turnedOn ? ButtonOFF() :ButtonON()}}>turn on</button>
            
        </div>
    );
}

