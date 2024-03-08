import React from 'react'
import { useState } from 'react'

const App = () => {
  const[form,setform]=useState({email:"",phone:""})
  const handleChange=(e)=>{
    setform({...form,[e.target.name]:e.target.value})
    console.log(form);
  }
  return (
    <div>
      <div className="button">
        <input type="text" name="email" value={form.email} onChange={handleChange} />
        <input type="text" name="phone" value={form.phone} onChange={handleChange} />
      </div>
    </div>
  )
}

export default App
