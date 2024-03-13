import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <button>Home</button>

     <button>My network ()</button>
     <button>Jobs ()</button>
     <button>Messaging ()</button>
     <button>Notifications ()</button>
     
     <button>Me</button>
    </>
  )
}

export default App
