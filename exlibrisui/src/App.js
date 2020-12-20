import React, { Component } from 'react';
import { Container, Jumbotron, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import axios from 'axios';
import Switch from 'react-bootstrap/esm/Switch';
import Header from './components/layout/Header';
import Books from './components/books/Books';
import AboutPage from './pages/About';
import AddBookPage from './pages/AddBook';
import PageNotFoundPage from './pages/PageNotFound';

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

  addBook = (title) => {
    axios
      .post('http://localhost:8000/admin/add-book/', {
        title: 'REST API',
        imageUrl:
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.hellogiggles.com%2Fuploads%2F2016%2F12%2F18043538%2Fshutterstock_91553819.jpg&f=1&nofb=1',
        pages: '4',
        description: '333 desc',
      })
      .then((res) => this.setState({ books: [...this.state.books, res.data] }));
  };

  render() {
    const { books } = this.state;
    return (
      <Container className="p-3">
        <Header />
        <React.Fragment>
          <Jumbotron>
            <Router>
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <Row>
                      <Books
                        books={books}
                        addToReport={this.addToReport}
                        deleteBook={this.deleteBook}
                      />
                    </Row>
                  )}
                />
                <Route exact path="/about" component={AboutPage} />
                <Route
                  exact
                  path="/add-book"
                  render={(props) => (
                    <AddBookPage
                      {...props}
                      books={books}
                      addBook={this.addBook}
                    />
                  )}
                />
                <Route path="*" component={PageNotFoundPage} />
              </Switch>
            </Router>
          </Jumbotron>
        </React.Fragment>
      </Container>
    );
  }
}

export default App;
