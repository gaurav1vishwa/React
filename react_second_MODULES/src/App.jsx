import React from 'react'
import Mynav from "./components/navbar";
import Myheader from "./components/header"





// this is default import 
// where we can create any file inside the component using the .jsx and import inside the App.jsx file.

// here step by step .....
// firstly import the file like import give_and_name  from "give the path where the folder and file is located"; 
// and than you can access file inside div which are given below with tags same name you mention aboce ;
const App = () => {
  return (
    <div>
      <Mynav />
      <Myheader />
    </div>
  )
}

export default App
