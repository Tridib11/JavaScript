import { useState } from "react";

function App() {
  const [color, setColor] = useState("red");

  return (
    <div style={{ backgroundColor: color }}>
      <button onClick={() => setColor("red")} disabled={color === "red"}>
        Change to red
      </button>
      <br />
      <br />
      <button onClick={() => setColor("green")} disabled={color === "green"}>
        Change to green
      </button>
    </div>
  );
}

export default App;
