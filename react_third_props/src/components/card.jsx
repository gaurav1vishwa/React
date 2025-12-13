import React from 'react'

const card = (props) => {
  return (
    <div className='container'>
     <div className='card'>
      <img src={props.img} alt="" />

      <h1>{props.user}, {props.age}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum assumenda nesciunt minus.</p>
      <button>submit</button>

     </div>
    </div>
  )
}

export default card
