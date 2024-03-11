import React from "react";
const ButtonCount=({incrementCount})=>{
    console.log("Inside Button Count");
    return (
        <button onClick={incrementCount}>Click me</button>
    )
}
export default React.memo(ButtonCount)