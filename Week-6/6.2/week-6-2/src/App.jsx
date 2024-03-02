import React, { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("https://sum-server.100xdevs.com/todos")
      .then(function (response) {
        setTodos(response.data.todos);
      });
  }, []);
  return (
    <>
      {todos.map((todo) => (
        <Todo title={todo.title} description={todo.description} />
      ))}
    </>
  );
  function Todo({ title, description }) {
    return (
      <div>
        <h1>{title}</h1>
        <h3>{description}</h3>
      </div>
    );
  }
}

export default App;
