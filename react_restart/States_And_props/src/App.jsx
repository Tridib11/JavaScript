import { useState } from 'react'
import Car from './Components/Car'
import './App.css'

function App() {
  return (
  <div>
    <h2>Hello from state vs props</h2>
    <Car defaultName={"Maruti"} color={"red"}></Car>
  </div>
  )
}

export default App
