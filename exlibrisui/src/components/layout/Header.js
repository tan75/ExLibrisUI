import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

export default function Header() {
  return (
    <div>
      <header>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#">ExLibris</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Library</Nav.Link>
              <Nav.Link href="#link">Report</Nav.Link>
              <Nav.Link href="#link">Admin Books</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
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
