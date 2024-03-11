import { useState } from 'react'
import './App.css'
// import NameCompoenent from './useMemo_Usagecomponents/NameCompoenent'
// import ResultCompoenent from './useMemo_Usagecomponents/ResultComponent'

import NameComponent from './ReactMemoComponent/NameComponent'
import ResultComponent from './ReactMemoComponent/ResultComponent'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NameComponent Name="Tridib"/>
      <ResultComponent marks={120}/>
    </>
  )
}

export default App
