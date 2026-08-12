import React, {useState} from 'react'
import axios from 'axios'
const App = () => {
  const [data, setData] = useState([])
  const getData = async () =>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    
    setData(response.data)
    
  }
  return (
    <>
     <div>
        {data.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div>

    <button onClick={getData}>Get Data</button>
    </>
  )
}

export default App
      {/* {data.map((user)=>{
      return(
        <p key={user.id}>{user.name}</p>
      )
    })}</div> */}