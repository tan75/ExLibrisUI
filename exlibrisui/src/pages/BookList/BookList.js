import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { ROUTE_BOOKS, ROUTE_ADD_BOOK } from '../../constants';

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
          <td>{pages || '-'}</td>
          <td>{description || '-'}</td>
        </tr>
      );
    });

  return (
    <>
      <div className="BookList">
        <Link className="d-block mb-3" to={ROUTE_ADD_BOOK}>
          Add Book
        </Link>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Title</th>
              <th>Pages</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>{renderBooks()}</tbody>
        </Table>
      </div>
    </>
  );
};

export default BookList;
