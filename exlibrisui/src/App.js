import { React, useState, useEffect } from 'react';
import Books from './components/Books';
import { listBooks } from './services/Books';

const App = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const data = await listBooks();
    // const res = await fetch('http://localhost:8001/books');
    // const data = await res.json();
    console.log(111, data);
    return data;
  };

  useEffect(() => {
    const getBooks = async () => {
      const booksList = await fetchBooks();

      setBooks(booksList);
    };
    getBooks();
  }, []);

  return (
    <div>
      <Books />
    </div>
  );
};

export default App;
