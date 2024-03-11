import { useState } from 'react'
import './App.css'
import NameComponent from './useMemo_Usagecomponents/NameCompoenent'
import ResultComponent from './useMemo_Usagecomponents/ResultComponent'

// import NameComponent from './ReactMemoComponent/NameComponent'
// import ResultComponent from './ReactMemoComponent/ResultComponent'
function App() {
  return (
    <>
      <NameComponent Name="Tridib"/>
      <ResultComponent marks={120}/>
    </>
  )
}

export default App
