import { useEffect, useState } from "react"
import axios from "axios"

function App() {
  const [selectedId, setSelectId] = useState(1);
  return (
    <div>
      <button onClick={function(){
        setSelectId(1)
      }}>1</button>
      <button onClick={function(){
        setSelectId(2)
      }}>2</button>
      <button onClick={function(){
        setSelectId(3)
      }}>3</button>
      <button onClick={function(){
        setSelectId(4)
      }}>4</button>

      <Todo id={selectedId} />
      </div>
    
  );
}

function Todo({ id }) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    axios
      .get("https://sum-server.100xdevs.com/todo?id=" + id)
      .then((response) => {
        setTodo(response.data.todo);
      });
  }, [id]);
  return (
    <div>
        ID:{id}
      <h1>{todo.title},</h1>
      <h4>{todo.description}</h4>
    </div>
  );
}

export default App;
