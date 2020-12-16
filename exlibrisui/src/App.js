import React, { Component } from 'react';
import { Container, Jumbotron, Row } from 'react-bootstrap';
import { v4 as uuid } from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/layout/Header';
import Books from './components/books/Books';
import AddBook from './components/books/AddBook';
import About from './components/About';

class App extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    axios.get('http://localhost:8000/books/').then((res) => {
      this.setState({ books: res.data.books });
      // console.log(res.data.books);
    });
  }

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
