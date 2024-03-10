import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState('')

  return (
    <>
      <h1>Hi i am a car</h1>
      <input type="text" placeholder='Enter Your name' onChange={(e)=>{setName(e.target.value)}}/>
      <h2>My name is {name}</h2>
    </>
  )
}

export default App
