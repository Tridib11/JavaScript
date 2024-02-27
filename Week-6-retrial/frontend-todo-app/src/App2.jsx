import { useState } from "react";

function app(){
    const [todos,setTodos]=useState([{
        title:"Go to gym",
        description:"Hit the gym from 5-7",
        id:1
    },{
        title:"Go to class",
        description:"Hit the gym from 7-9",
        id:2
    }])
    return (
        <div>
            {todos.map((todo)=>{
                 return <Alltodos title={todo.title} description={todo.description}></Alltodos>
            })}
        </div>
    )
}
function Alltodos(props){
    return <div>
        {props.title},
        {props.description}
    </div>
}

export default app;