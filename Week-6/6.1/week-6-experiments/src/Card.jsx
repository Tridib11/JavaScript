import { useEffect } from "react";

function App(){
    useEffect(function(){
        alert('hi')
    },[])

    return <div>
        hi there
    </div>
}

function CardWrapper({children}){
    console.log(children);
    return <div style={{border:"2px solid black"}}>
        {children}
    </div>

}
function TextComponent(){
    return <div>
        Hi there
    </div>
}

export default App