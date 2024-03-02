import {memo,useState} from "react"

function App(){
    const [count,setCount]=useState(0)
    function logSomething(){
        console.log("Child Clicked")
    }
    return <div>
        <ButtonComponent onClick={logSomething}/>
        <button onClick={()=>{
            setCount(count+1)
        }}>Click me {count}</button>
    </div>
}

const ButtonComponent=memo((inputFunction)=>{
    console.log("Child render");
    return <div>
        <button onClick={inputFunction}>Button CLicked</button>
    </div>
})

export default App