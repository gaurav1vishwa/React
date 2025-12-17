import React from 'react'
import { use } from 'react'
import { useSyncExternalStore } from 'react'
import { useState } from 'react'

const batch_management = () => {

    // 
const [num , SetNum]= useState({user:"garuv", age:20});
    function click(){
        //creating the new object and asign with it as the privious one 
        const newnum={...num};
        newnum.user="rahul";
        newnum.age=32;
        SetNum(newnum)
    }
  return (
    <div>
      <h1>{num.user}{num.age}</h1>
      <button onClick={click}>click me </button>
    </div>
  )
}

export default batch_management

