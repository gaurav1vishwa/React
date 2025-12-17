import React, { useState } from 'react'

const App = () => {

  const [title, SetTitle] = useState('');
  const [text, SetText] = useState('');

  const [task, SetTask] = useState([]);


  // prevent the defalut page reload by creating a arrow function and inside this i am going to create i am calling a  preventDefault

  const submitHandler = (e) => {
    // this restict to defalult reload 
    e.preventDefault();
    console.log("form is submited");

    // firstly every value will be asign to null 
    SetTitle('')
    SetText('')

    //create a copy arry of the same task array to store the previous task as well
    const copyTask = [...task];

    // push the task inside the copy array 
    copyTask.push({ title, text })
    // and now i set the copy task inside the copyarr whic is setTask.
    SetTask(copyTask)
    console.log(task)



  }
  // to delete  the notes ... creating a arrow functon where i can pass the idx which is unique and delete the index where the notes information  has stored
  const deleteTask = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1)
    SetTask(copyTask)

  }
  return (

    <div>
      <div className=' p-2 sm:p-4 md:p-6 lg:p-10  lg:flex items-left align-top   flex flex-col lg:flex-row '>

        <form
          // creating a arrow functon and calling a eventlishning onSubit so when the form is submit it prevent the default relaod;

          onSubmit={(e) => {
            submitHandler(e);
          }}

          action="submit" className='text-xl sm:text-2xl md:text-3xl lg:text-4xl' >

          <h1 className=' text-white text-4xl m-5'> Add Notes</h1>

          {/* first input */}
          <input type="text" placeholder='Enter Notes Heading ' className=' tex-xl p-3 border rounded border-white placeholder-red-600 text-white m-5  sm:w-3/4 md:w-1/2 lg:w-200 ' 
          
          // here the value will we change .. 
          value={title}
            onChange={(e) => {
              SetTitle(e.target.value)

            }} />

          {/* second input */}
          <textarea name="" id="" placeholder='Write Details ' className=' tex-xl p-3 border rounded border-white placeholder-red-600 text-white m-5 h-50 sm:w-3/4 md:w-1/2 lg:w-200 flex  '
          
          // here the value will we change .. 
          value={text}
            onChange={(e) => {
              SetText(e.target.value)
            }}

          ></textarea>

          <button className=' bg-white text-black cursor-pointer flex items-center justify-center h-auto sm:w-3/4 md:w-1/2 lg:w-200 m-5 scale-100 hover:scale-90 '>
          Add notes
          </button>
        </form>

        <div className='border border-amber-400 m-2 '></div>


        <div>
          <h1 className=' text-4xl text-white m-2 '>Enter your Notes</h1>

          <div className='flex flex-wrap relative'>

            {/* here the map function is assign the title and text into the heading tag and paragraph as well  */}
              
           
            {task.map(function (elem, idx) {
              return <div key={idx}

               className='  w-50 h-50  text-black font-bold m-3 rounded bg-[url("/images/image.jpg")] bg-cover bg-center '>
                <div>
                  <h3 className=' text-black leading-tight text-xl font-bold'>{elem.title}</h3>

                  <p className=' w-40 h-40 text-black leading-tight  mt-4  font-medium p-2' >{elem.text}</p>
                </div>

 {/* here when the button will be clicked than a event listener  will be called (onClick) and delet  the informatin at the particuar index */}
                <button onClick={(idx) => {
                  deleteTask(idx.id)
                }}

                  className='  bg-red-700  text-white rounded w-full '> Delete  </button>
              </div>
            })}

          </div>


        </div>
      </div>

    </div>
  )
}

export default App
