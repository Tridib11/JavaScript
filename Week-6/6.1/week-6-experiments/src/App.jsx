import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header title="Tridib1"></Header>
      <Header title="Tridib2"></Header>
    </div>
  )
}

function Header({title}){
  return <div>
    {title}
  </div>
}

export default App
