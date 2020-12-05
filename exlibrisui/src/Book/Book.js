import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { title } = props;
  return (
    <div>
      <p>{title}</p>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Book;
