import React, { Component } from 'react';
import { Container, Jumbotron, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/layout/Header';
import Books from './components/books/Books';
import AboutPage from './pages/About';
import AddBookPage from './pages/AddBook';

class App extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    axios.get('http://localhost:8000/books/').then((res) => {
      this.setState({ books: res.data.books });
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

  addBook = (title, imageUrl) => {
    axios
      .post('http://localhost:8000/admin/add-book/', {
        title,
        imageUrl,
        pages: '4',
        description: '333 desc',
      })
      .then((res) => this.setState({ books: [...this.state.books, res.data] }));
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
          <Route exact path="/about" component={AboutPage} />
          <Route
            exact
            path="/add-book"
            render={(props) => (
              <AddBookPage {...props} books={books} addBook={this.addBook} />
            )}
          />
        </Container>
      </Router>
    );
  }
}

export default App;
