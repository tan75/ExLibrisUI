import React, { Component } from 'react';
import { Container, Jumbotron, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/layout/Header';
import Books from './components/books/Books';
import AboutPage from './pages/About';
import AddBookPage from './pages/AddBook';

const baseUrl = `http://localhost:8000`; // For Dev
// const baseUrl = `https://gobananas.work`; // For Prod https://gobananas.work/api/books

class App extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    axios.get(`${baseUrl}/api/books/`).then((res) => {
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

  addBook = (title, imageUrl, pages, description) => {
    console.log('777');
    axios
      .post(`${baseUrl}/api/admin/add-book/`, {
        title,
        imageUrl,
        pages,
        description,
      })
      .then((res) => {
        this.setState({
          books: [...this.state.books, res.data],
        });
        console.log('666 books ', this.state.books);
      });
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
