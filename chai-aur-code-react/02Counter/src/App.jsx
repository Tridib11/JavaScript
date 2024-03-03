import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const[count,setCount]=useState(0)

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value {count}</h2>
      <button onClick={()=>{
        setCount(count+1)
      }}>Add value</button>
      <br />
      <button onClick={()=>{
        setCount(count-1)
      }}>Remove Value</button>
    </>
  )
}

export default App
