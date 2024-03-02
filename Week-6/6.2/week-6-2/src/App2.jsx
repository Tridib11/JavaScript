import React, { useState,useEffect } from "react"
import axios from "axios"

function Todo({id}){
    const [todo,setTodo]=useState({})
    useEffect(()=>{
        axios.get("https://sum-server.100xdevs.com/todo?id="+id)
        .then(Response =>{
            setTodo(Response.data.todo)
        })
    },[i])
    return <div>
        <h1>
            {todo.title}
        </h1>
        <h4>
            {todo.description}
        </h4>
    </div>
}
function App(){
    const [selectedId,setSelectedId]=useState(1)
    return <div>
       <button onClick={function(){
        setSelectedId(1)
       }}>1</button>
       <button onClick={function(){
        setSelectedId(2)
       }}>2</button>
       <button onClick={function(){
        setSelectedId(3)
       }}>3</button>
       <button onClick={function(){
        setSelectedId(4)
       }}>4</button>

       <Todo id={selectedId}></Todo>
    </div>

}


export default App