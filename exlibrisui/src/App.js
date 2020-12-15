import React, { Component } from 'react';
import { Container, Jumbotron, Row } from 'react-bootstrap';
import { v4 as uuid } from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Books from './components/books/Books';
import AddBook from './components/books/AddBook';
import About from './components/About';

class App extends Component {
  state = {
    books: [
      {
        id: uuid(),
        title: 'JavaScript Good Parts',
        pages: 10002,
        imageUrl:
          'https://assets.entrepreneur.com/content/16x9/822/20150115183825-books-reading.jpeg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tortor diam, volutpat vitae iaculis vitae, scelerisque pulvinar mauris. ',
        addedToReport: true,
      },
      {
        id: uuid(),
        title: 'JavaScript Bad Parts',
        pages: 10,
        imageUrl:
          'https://assets.entrepreneur.com/content/16x9/822/20150115183825-books-reading.jpeg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tortor diam, volutpat vitae iaculis vitae, scelerisque pulvinar mauris. ',
        addedToReport: false,
      },
      {
        id: uuid(),
        title: 'Python Good Parts',
        pages: 10002,
        imageUrl:
          'https://assets.entrepreneur.com/content/16x9/822/20150115183825-books-reading.jpeg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tortor diam, volutpat vitae iaculis vitae, scelerisque pulvinar mauris. ',
        addedToReport: false,
      },
      {
        id: uuid(),
        title: 'Python Bad Parts',
        pages: 10,
        imageUrl:
          'https://assets.entrepreneur.com/content/16x9/822/20150115183825-books-reading.jpeg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tortor diam, volutpat vitae iaculis vitae, scelerisque pulvinar mauris. ',
        addedToReport: false,
      },
      {
        id: uuid(),
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

  deleteBook = (id) => {
    this.setState({
      books: [...this.state.books.filter((book) => book.id !== id)],
    });
  };

  addBook = (title) => {
    const newBook = {
      id: 100,
      title,
      pages: 1000,
      imageUrl: 'ttt',
      description: 'Description',
      addedToReport: false,
    };
    this.setState({ books: [...this.state.books, newBook] });
  };

  render() {
    const { books } = this.state;
    return (
      <Router>
        <Container className="p-3">
          <Header />
          <Route
            exact
            path="/"
            render={(props) => (
              <React.Fragment>
                <Jumbotron>
                  <AddBook addBook={this.addBook} />
                  <Row>
                    <Books
                      books={books}
                      addToReport={this.addToReport}
                      deleteBook={this.deleteBook}
                    />
                  </Row>
                </Jumbotron>
              </React.Fragment>
            )}
          />
          <Route path="/about" component={About} />
        </Container>
      </Router>
    );
  }
}

export default App;
