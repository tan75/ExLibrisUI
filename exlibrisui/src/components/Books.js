import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';

class Books extends Component {
  render() {
    const { books, addToReport, deleteBook } = this.props;
    return books.map((book) => (
      <BookItem
        key={book.id}
        book={book}
        addToReport={addToReport}
        deleteBook={deleteBook}
      />
    ));
  }
}

Books.propTypes = {
  books: PropTypes.array.isRequired,
  addToReport: PropTypes.func.isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default Books;
