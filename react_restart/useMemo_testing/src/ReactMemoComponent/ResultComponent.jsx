// import React from "react"
// const ResultCompoenent=({marks,subject})=>{
//     console.log("Inside result component")
//     return (
//         <h2>Result is : {marks}</h2>
//     )
// }

// export default React.memo(ResultCompoenent)



import React,{useMemo} from "react"
const ResultCompoenent=({marks,subject})=>{
    console.log("Inside Result component")

    const percentageMarks=useMemo(()=>{
        return (80*100)/100
    },[])
    return (
        <div>

            <h2>Result is : {marks}</h2>
            <h2>Percentage is : {percentageMarks}</h2>
            <h2>For subject : {subject}</h2>
        </div>
    )
}

export default React.memo(ResultCompoenent)