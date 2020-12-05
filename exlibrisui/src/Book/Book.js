import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  // const { title, children } = props;
  return (
    <div>
      <div>
        <p>{props.title}</p>
        <p>{props.children}</p>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Book;
