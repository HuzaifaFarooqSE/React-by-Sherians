import React, {useState} from 'react'
const formHandler = (e) =>{
  e.preventDefault()
  console.log("Form Submitted")
}
const App = () => {
  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e)=>{
        formHandler(e)
      }} className='flex gap-4 lg:w-1/2 p-10 flex-col items-start'>
         <h1 className='text-4xl mb-2 font-bold'>Add Notes</h1>
            <div className='flex flex-col items-start gap-5 w-1/2'>
              <input type="text" 
                placeholder='Enter your tasks' 
                className='px-5 w-full font-medium py-2 border-2 outline-none rounded' />
              <textarea 
                placeholder='Write details' 
                className='px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-2 outline-none  rounded' />
              <button 
              className='bg-white active:scale-95 font-medium w-full outline-none  text-black px-5 py-2 rounded'>Add Note</button>
              
            </div>
            {/* <img className='h-56' src="https://imgs.search.brave.com/yYZbe2je2gGM2utwDlhxniTUrTSF8JaBGSeGMcF6_8s/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDkv/NTc4LzE1NS9zbWFs/bC9hLWJsYWNrLWFu/ZC13aGl0ZS1kcmF3/aW5nLW9mLWEtbWFu/LXdyaXRpbmctcG5n/LnBuZw" alt="" /> */}

            
      </form>
      <div className='flex gap-5 flex-wrap'>
        <div className='h-52 w-40 rounded-2xl bg-white'></div>
        <div className='h-52 w-40 rounded-2xl bg-white'></div>
        <div className='h-52 w-40 rounded-2xl bg-white'></div>
        <div className='h-52 w-40 rounded-2xl bg-white'></div>
        <div className='h-52 w-40 rounded-2xl bg-white'></div>
        <div className='h-52 w-40 rounded-2xl bg-white'></div>
        <div className='h-52 w-40 rounded-2xl bg-white'></div>
        <div className='h-52 w-40 rounded-2xl bg-white'></div>
        <div className='h-52 w-40 rounded-2xl bg-white'></div>
      </div>
    </div>
  )
}

export default App