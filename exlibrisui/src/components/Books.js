import { React } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const Books = ({ books, onDelete, toggleFinished }) => {
  return (
    <>
      {books.map((book) => (
        <Book
          key={book._id}
          book={book}
          onDelete={onDelete}
          toggleFinished={toggleFinished}
        />
      ))}
    </>
  );
};

Books.propTypes = {
  books: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  toggleFinished: PropTypes.func.isRequired,
};

export default Books;
