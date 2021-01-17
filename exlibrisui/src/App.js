import React, { Component } from 'react';
import { Container, Jumbotron, Row, Form } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './components/layout/Header';
import Books from './components/books/Books';
import AboutPage from './pages/About';
import AddBookPage from './pages/AddBook';
import Report from './components/report/Report';

const baseUrl = `http://localhost:8000`; // For Dev
// const baseUrl = `https://gobananas.work`; // For Prod https://gobananas.work/api/books

class App extends Component {
  // state = {
  //   books: [],
  //   inputValue: '',
  // };

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
          books: [...this.state.books, res.data.book],
        });
        window.location.href = '/'; // redirect to '/' once book is added
      });
  };

  // booksFilterOnChange = (e) => {
  //   this.setState({
  //     inputValue: e.target.value,
  //   });
  // };

  render() {
    // const filteredBooks = this.state.books.filter((book) => {
    //   return book.title
    //     .toLowerCase()
    //     .includes(this.state.inputValue.toLowerCase());
    // });

    // const { books } = this.state;
    return (
      <Router>
        <Container className="p-3" fluid>
          <Header booksFilterOnChange={this.booksFilterOnChange} />
          <Route
            exact
            path="/"
            render={() => (
              <Container className="p-3" fluid>
                <Form inline>
                  <br />
                  <Form.Group>
                    <Form.Control
                      type="text"
                      placeholder="Search"
                      className="mr-sm-2"
                      onChange={this.booksFilterOnChange}
                    />
                  </Form.Group>
                </Form>
                <React.Fragment>
                  <Jumbotron>
                    <Row xs={1} sm={2} md={2} lg={3} xl={4}>
                      <Books
                        /* books={filteredBooks} */
                        books={this.props.bks}
                        addToReport={this.addToReport}
                        deleteBook={this.deleteBook}
                      />
                    </Row>
                    <Row>
                      <Report />
                    </Row>
                  </Jumbotron>
                </React.Fragment>
              </Container>
            )}
          />
          <Route exact path="/about" component={AboutPage} />
          <Route
            exact
            path="/add-book"
            render={(props) => (
              <AddBookPage
                {...props}
                books={this.props.bks}
                addBook={this.addBook}
              />
            )}
          />
        </Container>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bks: state.books,
  };
};

App.propTypes = {
  bks: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(App);
