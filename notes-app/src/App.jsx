import React  from 'react'
import { useState } from "react";


const App = () => {
  const [title, setTitle] = useState('')
  const [details, setdetails] = useState('')
  const [task, setTask] = useState([])
  const formHandler = (e) =>{
  e.preventDefault()
  
  // console.log(title)
  // console.log(details)
  const copyTask = [...task]
  copyTask.push({ title, details })
  setTask(copyTask)
  console.log(copyTask)
  setTitle('');
  setdetails('')
  // const copyTask = [...task]

  //   copyTask.push({ title, details })

  //   setTask(copyTask)

  //   console.log(copyTask)

  //   setTitle('')
  //   setdetails('')
}

  const deleteNote=(idx)=>{
    const copyTask = [...task]
    console.log(idx);
    copyTask.splice(idx,1)
    setTask(copyTask)
    
  }
  return (
    <div className='h-screen lg:flex bg-black text-white'>


          <form onSubmit={(e)=>{
            
          formHandler(e)
          }} className='flex gap-4 lg:w-1/2 p-10 flex-col items-start'>


         <h1 className='text-4xl mb-2 font-bold'>Add Notes</h1>

            <div  className='flex flex-col items-start gap-5 w-1/2'>

              <input type="text" 
                placeholder='Enter your tasks' 
                className='px-5 w-full font-medium py-2 border-2 outline-none rounded'
                value={title}
                onChange={(e)=>{
                  setTitle(e.target.value)
                }} />

              <textarea 
                placeholder='Write details' 
                className='px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-2 outline-none  rounded'
                value={details}
                onChange={(e)=>{
                  setdetails(e.target.value)
                }} />

              <button 
              className='bg-white active:bg-gray-400 font-medium w-full outline-none  text-black px-5 py-2 rounded'>Add Note</button>
              
            </div>
            {/* <img className='h-56' src="https://imgs.search.brave.com/yYZbe2je2gGM2utwDlhxniTUrTSF8JaBGSeGMcF6_8s/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDkv/NTc4LzE1NS9zbWFs/bC9hLWJsYWNrLWFu/ZC13aGl0ZS1kcmF3/aW5nLW9mLWEtbWFu/LXdyaXRpbmctcG5n/LnBuZw" alt="" /> */}

            
      </form>

      <div className='lg:w-1/2 lg:border-l p-10'>

        <h1 className='text-xl'>My Notes</h1>
        
      <div className='h-full mt-5 overflow-auto flex gap-5 flex-wrap'>
        
        {task.map((elem, idx)=>{
          return(
            <div key={idx} className='h-52 w-40 rounded-2xl bg-white text-black p-4 '>
              <h3 className=' flex font-bold text-lg border-b-2 justify-between  '>{elem.title}
                <button className='border-2 rounded-full h-fit w-fit p-1 text-xs bg-red-600 cursor-pointer active:scale-95 text-white' onClick={()=>{
                  deleteNote(idx)
                }}>X</button>
              </h3>
              <h3>{elem.details}</h3>
            </div>
          )
        })}
     
       
        
      </div>
      </div>
    </div>
  )
}

export default App