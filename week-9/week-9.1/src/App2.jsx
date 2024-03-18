import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [render, setRender] = useState(true);
  useEffect(() => {
    setInterval(() => {
      setRender(r=>!r);
    }, 5000);
  }, []);
  return <>{render ? <MyComponent /> : <div></div>}</>;
}

function MyComponent() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // Perform setup or data fetching here
    console.log("Component mounted");
    return () => {
      // Cleanup code (similar to componentWillUnmount)
      console.log("Compoenent Unmounted");
    };
  }, []);

  // Render UI

  return <div>From inside my component</div>;
}

export default App;
