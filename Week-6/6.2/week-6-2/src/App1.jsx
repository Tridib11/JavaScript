import { useEffect, useState } from "react"
import axios from "axios"

function Todo({id}){
    const [todo,setTodo]=useState({})
    useEffect(()=>{
        axios.get("https://sum-server.100xdevs.com/todo?id="+id)
        .then(Response =>{
            setTodo(Response.data.todo)
        })
    },[])
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
    return <div>
        <Todo id={3}/>
    </div>

}

export default App