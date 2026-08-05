import React from 'react'
import {useState} from 'react'
const App = () => {
    const [title, setTitle] = useState('')
    const formSubmit = (e) =>{
        e.preventDefault()
        console.log("Form Submitted by", title)
        setTitle('')
    }
  return (
    <div>
        <form onSubmit={(e)=>{
                formSubmit(e)
        }}>
            <input type="text" 
            placeholder='Enter the text'
            value={title}
            onChange={(e)=>setTitle(e.target.value)}/>
        
            <button>Press</button>
        </form>
    </div>
  )
}

export default App