import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

import { ROUTE_ABOUT, ROUTE_HOME, ROUTE_REPORT } from '../constants';

const MainNav = () => {
  return (
    <div className="MainNav">
      <Navbar bg="light" expand="lg" variant="light">
        <Navbar.Brand as={Link} to={ROUTE_HOME}>
          {' '}
          Ex Libris
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to={ROUTE_HOME}>
            Books
          </Nav.Link>
          <Nav.Link as={Link} to={ROUTE_REPORT}>
            Report
          </Nav.Link>
          <Nav.Link as={Link} to={ROUTE_HOME}>
            Add Book
          </Nav.Link>
          <Nav.Link as={Link} to={ROUTE_HOME}>
            Admin
          </Nav.Link>
          <Nav.Link as={Link} to={ROUTE_ABOUT}>
            About
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default MainNav;
