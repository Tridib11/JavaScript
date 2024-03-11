import { useState } from 'react'

import './App.css'
import ButtonCount from './Components/ButtonCount'

function App() {
  const [count, setCount] = useState(0)

  const incrementCount=()=>{
    setCount(count+1)
  }
  return (
    <>
      <div>
        <h2>{count}</h2>
        <ButtonCount incrementCount={incrementCount}/>
      </div>
    </>
  )
}

export default App
