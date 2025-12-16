import React from 'react'
import { useSyncExternalStore } from 'react'
import { useState } from 'react'

const counter_project = () => {
 const [num , SetNum]= useState(0);
 
   function Increase(){
 SetNum(num+1);
   }
    function Deccrease(){
     SetNum(num-1);
   }
    function inc10(){
     SetNum(num+10);
   }
    function dec10(){
     SetNum(num-10);
   }
   return (
     <div>
       <h1>The current number is :{num} </h1>
       <button onClick={Deccrease}>Decrease</button>
        <button onClick={Increase}>Inwwqecrease</button>
       <button onClick={inc10}>Inc+10</button>
       <button onClick={dec10}>Dec-10</button>
     </div>
   )
 }

export default counter_project
