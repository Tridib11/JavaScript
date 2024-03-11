import React, { useState } from 'react'

const Car=({defaultName,color})=> {
  const [carName,setCarName]=useState(defaultName)
  return (
    <div>
      <h2>Hi i am a Car</h2>
      <input type="text" placeholder='Enter tge cars name' onChange={(e)=>{setCarName(e.target.value)}} />
      <p>My car name is {carName}</p>
      <p>My car's color is {color}</p>
      <p>Default name is {de}</p>
    </div>
  )
}
export default Car;
