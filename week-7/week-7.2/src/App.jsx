import { useState,useContext } from 'react'
import './App.css'
import { CountContext } from './Context'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CountContext.Provider value={count}>
        <Count setCount={setCount}/>
      </CountContext.Provider>
    </>
  )
}

function Count({setCount}){
  return <div>
    <CountRenderer/>
    <Buttons setCount={setCount}/>
  </div>
}

function CountRenderer(){
  const count=useContext(CountContext)
  return <div>
    {count}
  </div>
}

function Buttons({setCount}){
  const count=useContext(CountContext)
  return (
    <div>
      <button onClick={()=>{
        setCount(count=>count+1)
      }}>
        Increase
      </button>
    </div>
  )
}

export default App
