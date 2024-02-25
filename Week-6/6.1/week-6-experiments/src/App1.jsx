import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";



function App() {
const [title,setTitle]=useState("My name is Tridib")
function updateTitle(){
  setTitle("My name is "+Math.random())
}  
return (
    <div>
      <button onClick={updateTitle}>Update</button>
      <Header title={title}></Header>
      <Header title="hello world"></Header>
      <Header title="hello world"></Header>
      <Header title="hello world"></Header>
      <Header title="hello world"></Header>
      <Header title="hello world"></Header>
      
    </div>
  );
}



const Header=React.memo(function Header({title}){
  return <div>
    {title}
  </div>
})

export default App;
