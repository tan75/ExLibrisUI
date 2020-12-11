import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
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
    ],
  };

  render() {
    const { books } = this.state;
    return (
      <Container className="p-3">
        <Jumbotron>
          <h1 className="header">Welcome to ExLibris</h1>
          <div>
            <Books
              books={books.map((book) => (
                <div>{book.title}</div>
              ))}
            />
            <Button variant="primary">Learn more</Button>
          </div>
        </Jumbotron>
      </Container>
    );
  }
}

export default App;
