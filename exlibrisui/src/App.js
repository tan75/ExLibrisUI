import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Books from './components/Books';

class App extends Component {
  state = {
    books: [
      {
        id: 1,
        title: 'JavaScript Good Parts',
        pages: 10002,
        imageUrl:
          'https://assets.entrepreneur.com/content/16x9/822/20150115183825-books-reading.jpeg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tortor diam, volutpat vitae iaculis vitae, scelerisque pulvinar mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
      },
      {
        id: 2,
        title: 'JavaScript Bad Parts',
        pages: 10,
        imageUrl:
          'https://assets.entrepreneur.com/content/16x9/822/20150115183825-books-reading.jpeg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tortor diam, volutpat vitae iaculis vitae, scelerisque pulvinar mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
      },
      {
        id: 3,
        title: 'Python Good Parts',
        pages: 10002,
        imageUrl:
          'https://assets.entrepreneur.com/content/16x9/822/20150115183825-books-reading.jpeg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tortor diam, volutpat vitae iaculis vitae, scelerisque pulvinar mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
      },
      {
        id: 4,
        title: 'Python Bad Parts',
        pages: 10,
        imageUrl:
          'https://assets.entrepreneur.com/content/16x9/822/20150115183825-books-reading.jpeg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tortor diam, volutpat vitae iaculis vitae, scelerisque pulvinar mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
      },
      {
        id: 5,
        title: 'Java Good Parts',
        pages: 10002,
        imageUrl:
          'https://assets.entrepreneur.com/content/16x9/822/20150115183825-books-reading.jpeg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tortor diam, volutpat vitae iaculis vitae, scelerisque pulvinar mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
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
                    <Card.Img variant="top" src={book.imageUrl} />
                    <Card.Body>
                      <Card.Title>{book.title}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        {book.pages}
                        &ensp;pages
                      </Card.Subtitle>
                      <Card.Text>{book.description}</Card.Text>
                      <Button variant="primary">Add To Report</Button>
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
