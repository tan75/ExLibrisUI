import { React } from 'react';
import PropTypes from 'prop-types';

const Books = ({ books }) => {
  return (
    <>
      {books.map((book) => (
        <h3 key={book._id}>{book._id}</h3>
      ))}
    </>
  );
};

Books.propTypes = {
  books: PropTypes.array.isRequired,
};

export default Books;
