import React from 'react'

const App = () => {
    const formSubmit = (e) =>{
        e.preventDefault()
        console.log("Form Submitted")
    }
  return (
    <div>
        <form onSubmit={(e)=>{
                formSubmit(e)
        }}>
            <input type="text" placeholder='Enter the text'/>
        
            <button>Press</button>
        </form>
    </div>
  )
}

export default App