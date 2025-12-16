// import React from 'react'

// const App = () => {
//     function f1(val){
//       console.log("you are clicked" + val)
//     }
//   return (
  
//     <div>
//       <button onClick={(ele)=>{
//         console.log(ele.clientX)
//       }}>clicked me</button>
//     </div>
//   )
// }

// export default App
import React from 'react'

const App = () => {
  function f1(){
    console.log("hey you are a fuction")
  }
  return (
    <div onMouseMove={f1} className='container'>
      
    </div>
  )
}

export default App
