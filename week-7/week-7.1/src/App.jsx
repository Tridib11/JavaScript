import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Landing from "./components/Landing";
function App() {
  const navigate=useNavigate()
  return (
    <div>
      <div>
        <button onClick={()=>{
          navigate("/")
        }}>Landing Page</button>
        <button onClick={()=>{
          navigate("/dashboard")
        }}>Dashboard</button>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
