import {useState} from "react"

function App() {
  const [count,setCount]=useState(0)
  function onclickHandler() {
    setCount(count+1)
  }
  return (
    <div>
      <button onClick={onclickHandler}> Counter {count}</button>
    </div>
  );
}

export default App;
