import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { title, children } = props;
  return (
    <div>
      <div>
        <p>{title}</p>
        <p>{children}</p>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Book;
