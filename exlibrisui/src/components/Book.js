import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes, { object } from 'prop-types';

const Book = ({ book, onDelete, toggleFinished }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
      </Card.Body>
      <Button
        variant="danger"
        onClick={() => {
          onDelete(book._id);
        }}
      >
        Delete Book
      </Button>
    </Card>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  toggleFinished: PropTypes.func.isRequired,
};

export default Book;
