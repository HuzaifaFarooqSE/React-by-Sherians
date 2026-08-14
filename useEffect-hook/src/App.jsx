import React, {useState} from 'react'
import { useEffect } from 'react'
const App = () => {
  const [num, setnum] = useState(0)
  const [num2, setnum2] = useState(100)
  useEffect(function(){
    
    console.log('Useeffect is in use')
  },[num2])
  return (
    <>
    <div>{num}</div>
    <div>{num2}</div>
    <button 
    onMouseEnter={ ()=>{
      setnum(num+1)
    }
    }
    onMouseLeave={ () =>{
      setnum2(num2+10)
    }
    }>click me </button>
    </>
  )
}

export default App