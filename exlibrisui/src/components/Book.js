import React from 'react';
import PropTypes, { object } from 'prop-types';

const Book = ({ book }) => {
  return (
    <div>
      <p>{book._id}</p>
    </div>
  );
};

Book.propTypes = {
  book: object.isRequired,
};

export default Book;
