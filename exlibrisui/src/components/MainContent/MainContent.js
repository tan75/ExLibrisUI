import React from 'react';
import Container from 'react-bootstrap/Container';
import BookList from '../../pages/BookList/BookList';

const MainContent = () => {
  return (
    <div className="MainContent mt-3">
      <Container>
        <BookList />
      </Container>
    </div>
  );
};

export default MainContent;
