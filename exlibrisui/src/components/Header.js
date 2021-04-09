import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title }) => {
  const onClick = () => {
    console.log('Clicked from Header');
  };

  return (
    <header>
      <h1>{title}</h1>
      <Button text="Add Book" onClick={onClick} />
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
