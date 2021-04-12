import React from 'react';
import PropTypes, { object } from 'prop-types';

const Book = ({ book, onDelete, toggleFinished }) => {
  return (
    <div role="button" onMouseDown={() => onDelete(book._id)} tabIndex={-1}>
      <p>{book._id}</p>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  toggleFinished: PropTypes.func.isRequired,
};

export default Book;
