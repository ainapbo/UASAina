import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [berita, setBerita] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/berita')
      .then(response => {
        setBerita(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Berita App</h1>
      </header>
      <main>
        <h1>List of Berita</h1>
        <ul>
          {berita.map(item => (
            <li key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.content}</p>
              <p><small>{new Date(item.created_at).toLocaleString()}</small></p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
