import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";

const Body = () => {
  
  return (
    <div>
      <HeaderWithButton/>
      <Header title="Triidib 2" />
      <Header title="Triidib 2" />
      <Header title="Triidib 2" />
      <Header title="Triidib 2" />
      <Header title="Triidib 2" />
    </div>
  )
};

const HeaderWithButton = ()=>{
  const [title,setTitle]=useState("My name is Tridib")
  function Update(){
    setTitle("My name is "+ Math.random())
  }
  return (
    <div>
      <button onClick={Update}>Click here to update</button>
      <Header title={title} />
    </div>
  )
}

const Header = ({title}) => {
  return <div>{title}</div>;
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <Body></Body>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
