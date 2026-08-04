import React, {useState} from 'react'

const App = () => {
    const [num, setnum] = useState({user: "Huzaifa", age: 20});
    const clicker = ()=>{

        setnum({user: "Hasan", age: 21});
        console.log(num.user)
    }
  return (
    <div>
        <h1>Name: {num.user}
            Age: {num.age}
        </h1>
        <button onClick={clicker}>Lets click this</button>
    </div>
  )
}

export default App