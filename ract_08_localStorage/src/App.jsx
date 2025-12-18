import React from 'react'
import { useEffect } from 'react'

const App = () => {

{/* // although we can perform the operation based on the local storge in js directly we can use it with the help of useEffect hooks and functons */}

// operations on local storages

useEffect(()=>{
  localStorage.setItem("name" ,"garuv")
  localStorage.setItem("age" , 19);
})


const show=localStorage.getItem("age");
console.log(show);


// const cleear=localStorage.clear();
// console.log(cleear)
console.log(localStorage.getItem("name"))
const remove =localStorage.removeItem("name");
console.log(remove)



  return (
    <div >
             {/* LOCAL STORGAES */}
   
   {/* Local Storage is a browser-based key–value storage

Core methods (all operations)

localStorage.setItem(key, value) → add/update

localStorage.getItem(key) → read and give the value associated with key 

localStorage.removeItem(key) → delete (only one item will be deleted)

localStorage.clear() → delete all (all item will be deleted)

localStorage.key(index) & localStorage.length → iterate  (tell us how many keys has stored in side the local storage )


USE OF LOCAL STORAGE 

If data is simple, non-sensitive, and device-specific → Local Storage is fine (like savign themes(dark /light ), login states , cards items and basic UI)
but if you want to store the large data than use the cookies server DB , MongoDb and all  */}






    </div>

  )
}

export default App
