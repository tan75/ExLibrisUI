import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { ROUTE_BOOKS } from '../../constants';

import { listBooks } from '../../services/Books';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const data = await listBooks();
      setBooks(data.books);
    };
    fetchBooks();
  }, []);

  const renderBooks = () =>
    books.map((book) => {
      const { _id, title, pages, description } = book;

      return (
        <tr key={_id}>
          <td>
            <Link to={`${ROUTE_BOOKS}/${_id}`}>{title}</Link>
          </td>
        </tr>
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
