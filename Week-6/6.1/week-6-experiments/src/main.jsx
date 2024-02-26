// import ReactDOM from 'react-dom/client'
// import App from './App1.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(

//     <App />

// )


import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";

const Body = () => {
  const [title,setTitle]=useState("My name is Tridib")
  function Update(){
    setTitle("My name is "+ Math.random())
  }
  return (
    <div>
      <button onClick={Update}>Click here to update</button>
      <Header title={title} />
      <Header title="Triidib 2" />
    </div>
  )
};

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


