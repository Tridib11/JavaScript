import { useState,memo, useCallback } from "react";

function App(){
    const[counter,setCounter]=useState(0)

    const a =useCallback(function(){
        console.log("Hi there");
    },[])

    return <div>
        <button onClick={()=>{
            setCounter(counter+1)
        }}>Counter ({counter})</button>

        <Demo a={a}/>
    </div>
}

const Demo=memo(function({a}){
    console.log("rerender");
    return <div>
        hi there {a}
    </div>
})

export default App