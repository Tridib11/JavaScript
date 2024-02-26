// Newer syntax using React 18 features
import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";

const Body = () => {
  const [title, setTitle] = useState("My name is Tridib");

  function Update() {
    setTitle("My name is " + Math.random());
  }

  return (
    <div>
      <button onClick={Update}>Click here to update</button>
      <Header title={title} />
      <Header title="Tridib 2" />
      <Header title="Tridib 2" />
      <Header title="Tridib 2" />
      <Header title="Tridib 2" />
      <Header title="Tridib 2" />
      <Header title="Tridib 2" />

    </div>
  );
};



// const Header = ({ title }) => {
//   return <div>{title}</div>;
// };

// Use React.memo on certain component which you want to re render without re rendering something some other components

const Header=React.memo(({ title }) => {
    return <div>{title}</div>;
  })

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
