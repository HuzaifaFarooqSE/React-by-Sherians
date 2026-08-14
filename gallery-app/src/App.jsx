import React, {useState} from 'react'
import axios from 'axios'
const App = () => {
  const [userData, setUserData] = useState([])
  const getData = async () =>{
    const response = await axios.get('https://picsum.photos/v2/list?page=3&limit=30')
    setUserData(response.data)
    console.log(response.data);
    
    
  }
  let printUserData = 'No User Available'
  if(userData.length>0){
    printUserData = userData.map(function(elem, idx){
      console.log(userData)
      return (
        <div>
          <div className='h-40 w-44'>
          <img src={elem.download_url} className='h-[90%] object-cover rounded-xl w-full' />
          <h2>{elem.author}</h2>
        </div>
        </div>
        
      )
    })
    
  }
  return (
    <><div className='bg-black h-screen text-white'>
    <button className='bg-green-600 px-5 py-2 rounded-2xl m-4 active:scale-95'
    onClick={getData}>Get data</button>
     <div className=' overflow-auto flex flex-wrap gap-5 '>
        {printUserData}
    </div>
    </div>
   
    </> 
  )
}

export default App

// import React, {useState} from 'react'
// import axios from 'axios'

// const App = () => {
  
//   const getData = async() => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     const data = res.json();
//     console.log(data)
    
//   }

  
//   return (
//     <div>
//       <button onClick={getData}>Clickk</button>
//     </div>
//   )
// }

// export default App