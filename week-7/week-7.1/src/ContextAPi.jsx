import React, { useContext, useState } from 'react'
import { CountContext } from './Context'

function App() {
    const [count,setCount]=useState(0)
    
    //Wrap anyone that wants to be a teleported value inside a provider

  return (
    <div>
        <CountContext.Provider value={count}>
          <Count count={count} setCount={setCount}/>
        </CountContext.Provider>
        {/* <Buttons count={count} setCount={setCount}/> */}
    </div>
  )
}

function Count({count,setCount}){
  return <div>
    <CountRenderer/>
    <Buttons count={count} setCount={setCount}/>
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
  return <div>
    <button onClick={()=>{
      setCount(count+1)
    }}>Increase</button>
    <button onClick={()=>{
      setCount(count-1)
    }}>Decrease</button>
  </div>

}

export default App
