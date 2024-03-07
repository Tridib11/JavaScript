import React, { useRef } from 'react'

function AppFocus() {
    const inputRef=useRef(null)
    function focus(){
        inputRef.current.focus();
    }
  return (
    <div>
      <input ref={inputRef} type="text" name="" id="" />
      <button onClick={focus}>Focus on the text bar</button>
    </div>
  )
}

export default AppFocus
