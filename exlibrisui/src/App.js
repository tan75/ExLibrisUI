import React, { Component } from 'react';
import { Container, Jumbotron, Row } from 'react-bootstrap';
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
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tortor diam, volutpat vitae iaculis vitae, scelerisque pulvinar mauris. ',
        addedToReport: true,
      },
      {
        id: 2,
        title: 'JavaScript Bad Parts',
        pages: 10,
        imageUrl:
          'https://assets.entrepreneur.com/content/16x9/822/20150115183825-books-reading.jpeg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tortor diam, volutpat vitae iaculis vitae, scelerisque pulvinar mauris. ',
        addedToReport: false,
      },
      {
        id: 3,
        title: 'Python Good Parts',
        pages: 10002,
        imageUrl:
          'https://assets.entrepreneur.com/content/16x9/822/20150115183825-books-reading.jpeg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tortor diam, volutpat vitae iaculis vitae, scelerisque pulvinar mauris. ',
        addedToReport: false,
      },
      {
        id: 4,
        title: 'Python Bad Parts',
        pages: 10,
        imageUrl:
          'https://assets.entrepreneur.com/content/16x9/822/20150115183825-books-reading.jpeg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tortor diam, volutpat vitae iaculis vitae, scelerisque pulvinar mauris. ',
        addedToReport: false,
      },
      {
        id: 5,
        title: 'Java Good Parts',
        pages: 10002,
        imageUrl:
          'https://assets.entrepreneur.com/content/16x9/822/20150115183825-books-reading.jpeg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tortor diam, volutpat vitae iaculis vitae, scelerisque pulvinar mauris. ',
        addedToReport: false,
      },
    ],
  };

  addToReport = (id) => {
    this.setState({
      books: this.state.books.map((book) => {
        if (book.id === id) {
          book.addedToReport = !book.addedToReport;
        }
        return book;
      }),
    });
  };

  render() {
    const { books } = this.state;
    return (
      <Container className="p-3">
        <h1 className="header">Welcome to ExLibris</h1>
        <Jumbotron>
          <Row>
            <Books books={books} addToReport={this.addToReport} />
          </Row>
        </Jumbotron>
      </Container>
    );
  }
}

export default App;
