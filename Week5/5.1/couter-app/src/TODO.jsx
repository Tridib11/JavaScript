import { useState } from "react";
function App() {
  const [todos, setTodos] = useState([
    {
      title: "Go to the gym",
      description: "GO to the gym from 7-9",
      completed: false,
    },
    {
      title: "Study DSA",
      description: "Study dsa from 9-100",
      completed: true,
    },
  ]);

//   return <div>{JSON.stringify(todos)}</div>;
function addTodo(){
    setTodos([...todos,{
        title:"new Todo",
        description:"desc of new todo"
    }])
}
return (
    <div>
       <button onClick={addTodo}>Add a random Todo</button>
        {todos.map(function(todo){
            return <Todo title={todo.title} description={todo.description}></Todo>
        })}
    </div>
)
}

function Todo(props){
    return <div>
        <h1>{props.title}</h1>
        <h2>{props.description}</h2>
    </div>
}

export default App;
