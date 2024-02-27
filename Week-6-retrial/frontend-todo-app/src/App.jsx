// var todos=[{
//   title:"go to the gym",
//   description:"go to gum11",
//   id:1
// },{
//   title:"go eat food",
//   description:"go eat at x12",
//   id:2
// }
// ]

import React, { useState } from "react";

let todo = {
  title: "go to the gym",
  description: "go to gum11",
  id: 1,
};

// setInterval(()=>{
//   todo.title="asdsded"
// },1000)

function App() {
  const [todo, setTodo] = useState({
    title: "go to the gym",
    description: "go to gum11",
    id: 1,
  });

  React.useEffect(() => {
    setInterval(() => {
      setTodo({
        title: "go to the gym" + Math.random(),
        description: "hit gum11",
        id: 5,
      });
    },1000);
  }, []);

  console.log("render");

  return (
    <>
      <h5>Hi there</h5>
      {todo.title},{todo.description},{todo.id}
      <PersonName
        firstName={todo.title}
        lastName={todo.description}
      ></PersonName>
    </>
  );
}

function PersonName(props) {
  return (
    <div>
      {props.firstName} {props.lastName}
    </div>
  );
}

export default App;
