import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">ExLibris</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Library</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/add-book">Add Book</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>
      </div>
    );
  }
}
