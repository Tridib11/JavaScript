import React, { useEffect, useState } from 'react'

function useMemo() {
  const[exchange1Data,setExchange1Data]=useState({})
  const[exchange2Data,setExchange2Data]=useState({})
  const[bankData,setBankData]=useState({})

  useEffect(()=>{
    setExchange1Data({
      returns:100
    })
  },[])

  useEffect(()=>{
    setExchange2Data({
      returns:100
    })
  },[])

  useEffect(()=>{
    setTimeout(()=>{
      setBankData({
        income:100
      })
    },5000)
  },[])


  console.log("Hi there before")
  const cryptoReturns=exchange1Data.returns+exchange2Data.returns
  console.log("Hi there after")
  const incomeTax=(cryptoReturns+bankData.income)*0.3
  return (
    <div>
      hi there your income tax returns are {incomeTax}
    </div>
  )
}

export default useMemo
