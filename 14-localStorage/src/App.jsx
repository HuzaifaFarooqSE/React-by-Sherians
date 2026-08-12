import React from 'react'

const App = () => {
  const user = localStorage.getItem('user')
  console.log(typeof(user));
  
  
  return (
    <div>App</div>
  )
}

export default App