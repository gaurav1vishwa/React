import React from 'react'

const App = () => {
  return (
    <div>
      
      {/* here i am using the tailwind css to style the div and these tags  */}

      <div className="w-80 p-4 bg-indigo-600 text-white rounded-lg shadow-md">
  <h1 className="text-xl font-bold mb-2">
    Hello Tailwind
  </h1>

  <p className="text-sm opacity-90">
    This is a simple Tailwind CSS div.
  </p>

  <button className="mt-4 px-4 py-2 bg-white text-indigo-600 rounded hover:bg-gray-200 transition">
    Click Me
  </button>
</div>

    </div>
  )
}

export default App
