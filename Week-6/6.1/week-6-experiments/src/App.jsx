import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  return (
    <div>
      <HeaderWithButton></HeaderWithButton>
      <Header title="hello world"></Header>
    </div>
  );
}
function HeaderWithButton() {
  const [title, setTitle] = useState("My name is Tridib");
  function updateTitle() {
    setTitle("My name is " + Math.random());
  }
  return (
    <div>
      <button onClick={updateTitle}>Update</button>
      <Header title={title}></Header>
    </div>
  );
}

function Header({ title }) {
  return <div>{title}</div>;
}

export default App;
