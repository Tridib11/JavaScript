import React, { useRef } from 'react'

export default function App3() {
    let ref=useRef(0)
    function counter(){
        ref.current+=1
        alert(`You clicked for ${ref.current} times`)
    }
  return (
    <div>
      <button onClick={counter}>
        CLick me 
      </button>
    </div>
  )
}
