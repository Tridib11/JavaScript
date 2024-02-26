import React from "react";
import { useState } from "react";
function App() {
  const [title,setTitle]=useState("My name is Tridib")

  function updateTitle(){
    setTitle("My name is "+ Math.random())
  }
  return <div>
    <button onClick={updateTitle}>Update the title</button>
    <Header title={title}></Header>
    <Header title="Tridib2"></Header>
  </div>;
}

function Header({title}){
  return <div>
    {title}
  </div>
}

export default App;









// import React from "react";
// import ReactDOM from "react-dom/client";
// const Header = (props) => {
//   const { title } = props;
//   return <div>{title}</div>;
// };

// const Body = () => {
//   return (
//     <div>
//       <Header title="Triidib 1" />
//       <Header title="Triidib 2" />
//     </div>
//   );
// };

// const AppLayout = () => {
//   return (
//     <div className="app">
//       <Header></Header>
//       <Body></Body>
//     </div>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
