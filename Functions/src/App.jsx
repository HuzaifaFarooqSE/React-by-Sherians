import React from 'react'
function btnClick(){
  console.log("Button Clicked")
}
const PageScroll = function(val){
  // console.log(val)
}
const App = () => {
  return (
    <div onWheel={(elem)=>{
        console.log(elem.deltaY)
    }} >

      <div className='h-screen w-screen bg-amber-200'></div>      
      <div className='h-screen w-screen bg-purple-300'></div>      
      <div className='h-screen w-screen bg-green-300'></div>      
  
    </div>
  )
}

export default App
