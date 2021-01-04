import { React, Fragment } from 'react';
import { Container, Jumbotron } from 'react-bootstrap';

function About() {
  return (
    <Fragment>
      <Container className="p-3">
        <Jumbotron>
          <h1>About</h1>
          <p>
            Book cataloging app built with NodeJS (backend), React - (frontend -
            currently in development), MongoDB. It is hosted on Digital Ocean
            and running on Nginx.
          </p>
        </Jumbotron>
      </Container>
    </Fragment>
  );
}

export default About;
