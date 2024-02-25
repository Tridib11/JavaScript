import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  return (
    <div>
      <HeaderWithButton/>
      <Header title="Tridib2"></Header>
      <Header title="Tridib2"></Header>
      <Header title="Tridib2"></Header>
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
      <button onClick={updateTitle}>Update the title</button>
      <Header title={title}></Header>
    </div>
  );
}

function Header({ title }) {
  return <div>{title}</div>;
}

export default App;
