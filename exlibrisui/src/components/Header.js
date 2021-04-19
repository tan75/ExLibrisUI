import React from 'react';
import { Nav, Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Header = ({ title }) => {
  const onClick = () => {
    console.log('Clicked from Header');
  };

  return (
    <>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/books">Books</Nav.Link>
        </Nav.Item>
      </Nav>
      <Form>
        <Form.Group controlId="formAddBook">
          <Form.Label>Add Book</Form.Label>
          <Form.Control type="text" placeholder="Enter Title" />
        </Form.Group>
      </Form>
    </>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
