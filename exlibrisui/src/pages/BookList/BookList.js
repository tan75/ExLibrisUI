import React, { useState, useEffect } from 'react';

import { listBooks } from '../../services/Books';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const data = await listBooks();
      setBooks(data);
    };
    fetchBooks();
  }, []);

  const renderBooks = () =>
    books.map((book) => {
      return <div>book</div>;
    });

  return (
    <>
      <h1>BookList</h1>
      <div>{renderBooks}</div>
    </>
  );
};

export default BookList;
