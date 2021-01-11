import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

export default class Header extends Component {
  render() {
    const { books } = this.props;
    return (
      <div>
        <header>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#">ExLibris</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Library</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/add-book">Add Book</Nav.Link>
              </Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </header>
      </div>
    );
  }
}

Header.propTypes = {
  books: PropTypes.array.isRequired,
};
