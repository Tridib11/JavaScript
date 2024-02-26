import React from "react";
import { useState } from "react";
function App() {
  const [title,setTitle]=useState("My name is Tridib")

  function updateTitle(){
    setTitle("My name is "+ Math.random())
  }
  return <div>
    <button onClick={updateTitle}>Update the title</button>
    <Header title={title}></Header>
    <Header title="Tridib2"></Header>
    <Header title="Tridib2"></Header>
   

  </div>;
}

function Header({title}){
  return <div>
    {title}
  </div>
}

export default App;






