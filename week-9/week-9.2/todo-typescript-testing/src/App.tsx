import './App.css'
//npm install --save @types/react @types/react-dom
function App() {
    return (
    <div>
      <Todo title='gym' description='gyming'/>
      <Todo title='game' description='gaming'/>
    </div>
  )
}


interface todo{
  title:string,
  description:string
}

function Todo(props:todo){
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default App
