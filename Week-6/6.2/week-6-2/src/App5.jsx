import { useState,memo } from "react";

function App(){
    const [count,setCount]=useState(0)

    function inputFunction(){
        console.log("Hi there");
    }
    return <div>
        <ButtonComponent inputFunction={inp/>
        <button onClick={()=>{
            setCount(count+1)
        }}>Clicked me ({count})</button>
    </div>
}

const ButtonComponent=memo(()=>{
    console.log("child rendered");
    return <div>
        <button>Button Clicked</button>
    </div>
})


export default App;