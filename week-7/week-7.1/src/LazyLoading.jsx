import "./App.css";
import React, { lazy } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
const Dashboard = lazy(()=> import("./components/Dashboard"));
const Landing = lazy(()=> import("./components/Landing"));


function App() {

  return (
    <div>  
      <BrowserRouter>
      <Appbar/>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
// navigate works only inside a component
function Appbar(){
  const navigate=useNavigate()
  return <div>
        <button onClick={()=>{
          navigate("/")
        }}>Landing Page</button>
        <button onClick={()=>{
          navigate("/dashboard")
        }}>Dashboard</button>
      </div>
}

export default App;
