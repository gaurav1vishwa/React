import React from 'react'
import Card from './components/card'

export default function App() {
  return (
    <div >

    
     <Card user='garuv' age={20} img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn2nmWoa-66Yo5xylQwIiAxtvMrK2pB2l4CA&s"/>
     <Card user='rahul' age={23} img="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"/>
     <Card user='priyanka' age={26} img ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWIHjjRLE7XfDw8BQnS3N0ZnrWlAYZv8hYTQ&s"/>
  
    </div>
  )
}

