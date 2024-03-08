import React, { useState,useEffect } from 'react'
import Navbar from './components/Navbar'
//https://jsonplaceholder.typicode.com/posts
function App() {
  const[cards,setCards]=useState([])

  const fetchData=async()=>{
    let a=await fetch("https://jsonplaceholder.typicode.com/posts")
    let data=await a.json()
    setCards(data)
    console.log(data)
  }
  useEffect(() => {
    fetchData()
  }, [])
    
  return (
    <div>
      <Navbar/>
      <div className="container">
        {cards.map((card)=>{
          return <div className="card">
            <h1>{card.title}</h1>
            <p>{card.body}</p>
            <span>By: UserId: {card.userId}</span>
          </div>
        })}
      </div>
    </div>
  )
}

export default App
