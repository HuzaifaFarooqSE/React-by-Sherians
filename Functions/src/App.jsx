import React from 'react'
function btnClick(){
  console.log("Button Clicked")
}
const Enter = function(){
  console.log("Mouse Enter")
}
const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <button className='bg-green-300' onMouseEnter={Enter} onChange={Enter}>Click</button>
    </div>
  )
}

export default App
