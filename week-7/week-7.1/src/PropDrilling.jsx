import React, { useState } from 'react'

function App() {
    const [count,setCount]=useState(0)
  return (
    <div>
        <Count count={count} setCount={setCount}/>
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
  const count=1
  return <div>
    {count}
  </div>
}

function Buttons({count,setCount}){
  const count=1
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
