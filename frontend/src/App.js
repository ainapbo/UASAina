import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/news')
            .then(response => {
                setNews(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the news!', error);
            });
    }, []);

    return (
        <div className="App">
            <h1>Daftar Berita</h1>
            <ul>
                {news.map((item, index) => (
                    <li key={index}>
                        <h2>{item.title}</h2>
                        <p>{item.summary}</p>
                        <p><strong>Kategori:</strong> {item.category}</p>
                        <p><strong>Keywords:</strong> {item.keywords.join(', ')}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
