import { useContext, useState } from 'react'
import './App.css'
import { CountContext } from './context'

function App() {
  const [count, setCount] = useState(7)

  return (
    <div>
      <CountContext.Provider value={count}>
      <CountRenderer/>
      </CountContext.Provider>
      <Increaser setCount={setCount}/>
    </div>
  )
}

function CountRenderer(){
  const count=useContext(CountContext)
  return <div>
    {count}
  </div>
}

function Increaser({setCount}){
  return(
    <div>
      <button onClick={()=>{
        setCount(count=>count+1)
      }}></button>
    </div>
  )
}

export default App
