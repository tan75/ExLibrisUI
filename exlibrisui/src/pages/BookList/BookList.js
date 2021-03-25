import React, { useState, useEffect } from 'react';

import { listBooks } from '../../services/Books';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const data = await listBooks();
      //console.log(222, data.books);
      setBooks(data.books);
    };
    fetchBooks();
  }, []);

  console.log(333, books);

  const renderBooks = () =>
    books.map((book) => {
      const { _id } = book;
      return (
        <div>
          <h1>{_id}</h1>
        </div>
      );
    });

  return (
    <>
      <h1>BookList</h1>
      <div>{renderBooks()}</div>
    </>
  );
};

export default BookList;
