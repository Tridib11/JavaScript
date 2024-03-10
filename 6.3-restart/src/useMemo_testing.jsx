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
    })
  },[])

  return (
    <div>
      
    </div>
  )
}

export default useMemo
