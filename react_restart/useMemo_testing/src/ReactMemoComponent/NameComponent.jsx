import React from "react"
const NameCompoenent=({Name})=>{
    console.log("Inside Name component")
    return (
        <h2>Name is : {Name}</h2>
    )
}

export default React.memo(NameCompoenent)