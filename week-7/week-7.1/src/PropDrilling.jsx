import React, { useState } from 'react'

function App() {
    const [count,setCount]=useState(0)
  return (
    <div>
        <Count count={count}/>
        <Buttons/>
    </div>
  )
}

function Count({count}){
  return <div>
    {count}
  </div>

}

function Buttons(){
  return <div>
    <button onClick={()=>{
      
    }}>Increase</button>
    <button onClick={()=>{

    }}>Decrease</button>
  </div>

}

export default App
