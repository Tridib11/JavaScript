import { useCallback, useEffect, useState } from 'react'

import './App.css'
import ButtonCount from './Components/ButtonCount'

function App() {
  const [count, setCount] = useState(0)

  const incrementCount=useCallback(()=>{
    setCount(prevCount=>prevCount+1)
  },[])
  useEffect(()=>{
    console.log("Inside Use Effect");
  },[incrementCount])
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
