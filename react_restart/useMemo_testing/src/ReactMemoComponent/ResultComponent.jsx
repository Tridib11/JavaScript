import React from "react"
const ResultCompoenent=({marks})=>{
    console.log("Inside result component")
    return (
        <h2>Result is : {marks}</h2>
    )
}

export default React.memo(ResultCompoenent)