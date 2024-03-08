import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import axios from 'axios';

function App() {
  const [cards, setCards] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setCards(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        {cards.map((card) => {
          return (
            <div className="card" key={card.id}>
              <h1>{card.title}</h1>
              <p>{card.body}</p>
              <span>By: UserId: {card.userId}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
