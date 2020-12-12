import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Books from './components/Books';

class App extends Component {
  state = {
    books: [
      {
        id: 1,
        title: 'JavaScript Good Parts',
        pages: 10002,
      },
      {
        id: 2,
        title: 'JavaScript Bad Parts',
        pages: 10,
      },
      {
        id: 3,
        title: 'Python Good Parts',
        pages: 10002,
      },
      {
        id: 4,
        title: 'Python Bad Parts',
        pages: 10,
      },
      {
        id: 5,
        title: 'Java Good Parts',
        pages: 10002,
      },
    ],
  };

  render() {
    const { books } = this.state;
    return (
      <Container className="p-3">
        <Jumbotron>
          <h1 className="header">Welcome to ExLibris</h1>
          <Row>
            <Books
              books={books.map((book) => (
                <Col>
                  <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>{book.title}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        Card Subtitle
                      </Card.Subtitle>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the cards content.
                      </Card.Text>
                      <Card.Link href="#">Card Link</Card.Link>
                      <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            />
          </Row>
        </Jumbotron>
      </Container>
    );
  }
}

export default App;
