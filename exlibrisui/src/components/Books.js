import { React } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const Books = ({ books }) => {
  return (
    <>
      {books.map((book) => (
        <Book key={book._id} book={book} />
      ))}
    </>
  );
};

Books.propTypes = {
  books: PropTypes.array.isRequired,
};

export default Books;
