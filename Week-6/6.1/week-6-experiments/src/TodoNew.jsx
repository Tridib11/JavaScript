import React, { useState } from "react";
import  ReactDOM  from "react-dom/client";


const Todo=({title,description})=>{
    return(
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

const Body=() =>{
    const [todos, setTodos] = useState([
        { title: "Todo 1", description: "Description for Todo 1" },
        { title: "Todo 2", description: "Description for Todo 2" },
        { title: "Todo 3", description: "Description for Todo 3" },
      ]);

      const addTodo=()=>{
        setTodos([
            ...todos,
            {
                title:`Todo ${todos.length+1}`,
                description:`New Todo description`
            }
        ])
      }

      return (
        <div>
            <button onClick={addTodo}>AddTodo</button>
            {todos.map((todo,index)=>(
                <Todo key={index} title={todo.title} description={todo.description}></Todo>
            ))}
        </div>
      )
}


const AppLayout=()=>{
    return <div className="app">
        <Body/>
    </div>
}

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)