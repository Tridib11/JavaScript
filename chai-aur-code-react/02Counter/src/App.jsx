import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value {count}</h2>
      <button onClick={() => {
        if (count < 20) { // Check if count is less than 20 before incrementing
          setCount(count + 1)
        }
      }}>Add value</button>
      <br />
      <button onClick={() => {
        if (count > 0) { // Check if count is greater than 0 before decrementing
          setCount(count - 1)
        }
      }}>Remove Value</button>
    </>
  )
}

export default App
