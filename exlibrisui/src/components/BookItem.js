import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookItem extends Component {
  render() {
    const { book } = this.props;
    return (
      <div>
        <p>{book}</p>
      </div>
    );
  }
}

BookItem.propTypes = {
  book: PropTypes.object.isRequired,
};

export default BookItem;
