import React, { Component } from 'react';
import { Container, Jumbotron, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/layout/Header';
import Books from './components/books/Books';
import AboutPage from './pages/About';
import AddBookPage from './pages/AddBook';
import Report from './components/report/Report';

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
    axios.post(`${baseUrl}/api/report`, { bookId: id }).then(() => {
      this.setState({
        books: this.state.books.map((book) => {
          if (book.id === id) {
            book.addedToReport = !book.addedToReport;
          }
          return book;
        }),
      });
      window.location.href = '/report'; // redirect to '/report' once book is added to the report
    });
  };

  deleteBook = (id) => {
    axios
      .post(
        `${baseUrl}/api/admin/delete-book/`,
        { bookId: id },
        {
          header: 'Content-Type: application/json',
        }
      )
      .then(() => {
        this.setState({
          books: [...this.state.books.filter((book) => book._id !== id)],
        });
      });
  };

  addBook = (title, imageUrl, pages, description) => {
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
        window.location.href = '/'; // redirect to '/' once book is added
      });
  };

  render() {
    const { books } = this.state;
    return (
      <Router>
        <Container className="p-3" fluid>
          <Header />
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <Jumbotron>
                  <Row xs={1} sm={2} md={2} lg={3} xl={4}>
                    <Books
                      books={books}
                      addToReport={this.addToReport}
                      deleteBook={this.deleteBook}
                    />
                  </Row>
                  <Row>
                    <Report />
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
