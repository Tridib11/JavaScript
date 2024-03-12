import { useContext } from "react";
import { CountContext } from "./Context";

function App() {
  return (
    <div>
      <Count />
    </div>
  );
}

function Count() {
  console.log("Count re-rendered");
  return (
    <div>
      <CountRenderer />
      <Buttons setCount={setCount} />
    </div>
  );
}

function CountRenderer() {
  const count = 0;
  return (
    <div>
      <b>{count}</b>
    </div>
  );
}

function Buttons() {
  const count = 0;
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
