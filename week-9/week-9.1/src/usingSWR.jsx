import React from 'react';
import "./App.css"
import useSWR from 'swr';
import axios from 'axios';

const fetcher = async function(url) {
  const response = await axios.get(url);
  return response.data;
};

function Profile() {
  const { data, error, isValidating } = useSWR('https://sum-server.100xdevs.com/todos', fetcher);

  if (error) return <div>failed to load</div>;
  if (isValidating) return <div>loading...</div>;
  return (
    <div>
      {data.todos.map((todo) => (
        <Track key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

function Track({ todo }) {
  return (
    <div>
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Profile />
    </div>
  );
}

export default App