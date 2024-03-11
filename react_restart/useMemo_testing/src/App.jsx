import { useState } from 'react'
import './App.css'
import NameCompoenent from './components/NameCompoenent'
import ResultCompoenent from './components/ResultComponent'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NameCompoenent Name="Tridib"/>
      <ResultCompoenent marks={80}/>
    </>
  )
}

export default App
