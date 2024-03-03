import { useState } from "react";

import "./App.css";
import Card from "./Components/Card";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind Test
      </h1>
      <div className="flex">

      <Card title="MacBook" description="Some Description"></Card>
      <Card title="Laptop" description="Some Description"></Card>
      </div>
      
    </div>
  );
}

export default App;
