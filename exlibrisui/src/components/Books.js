import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';

class Books extends Component {
  render() {
    const { books } = this.props;
    return books.map((book) => <BookItem key={book.id} book={book} />);
  }
}

Books.propTypes = {
  books: PropTypes.array.isRequired,
};

export default Books;
