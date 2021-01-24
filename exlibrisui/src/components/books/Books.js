import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getBooks } from '../../store/actions/booksActions';
import BookItem from './BookItem';

class Books extends Component {
  componentDidMount() {
    this.props.getBooks();
  }

  render() {
    const { books, addToReport, deleteBook } = this.props;
    console.log('556 this.props => ', this.props);
    console.log('557 books => ', typeof books, ' ', JSON.stringify(books));
    const updBooks = books.books;
    return updBooks.map((book) => (
      <BookItem
        key={book._id}
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
  getBooks: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ books: state.books });

// export default Books;
export default connect(mapStateToProps, { getBooks })(Books);
