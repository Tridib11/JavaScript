import React from "react";
function App() {
  return <div>
    <Header title="Tridib1"></Header>
    <Header title="Tridib2"></Header>
  </div>;
}

function Header({title}){
  return <div>
    {title}
  </div>
}

export default App;
