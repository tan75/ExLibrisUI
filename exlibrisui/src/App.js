import React, { Component } from 'react';
import { Container, Jumbotron, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/layout/Header';
import Books from './components/books/Books';
import AddBook from './components/books/AddBook';
import AboutPage from './pages/About';
import AddBookPage from './pages/AddBook';

class App extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    axios.get('http://localhost:8000/books/').then((res) => {
      console.log('loading->', res.data);
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

  // addBook = (title) => {
  //   const newBook = {
  //     id: 100,
  //     title,
  //     pages: 1000,
  //     imageUrl: 'ttt',
  //     description: 'Description',
  //     addedToReport: false,
  //   };
  //   this.setState({ books: [...this.state.books, newBook] });
  // };

  addBook = (title) => {
    axios
      .post('http://localhost:8000/admin/add-book/', {
        title: 'REST API',
        imageUrl:
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.hellogiggles.com%2Fuploads%2F2016%2F12%2F18043538%2Fshutterstock_91553819.jpg&f=1&nofb=1',
        pages: '333',
        description: '333 desc',
      })
      // .then((res) => this.setState({ books: [...this.state.books, res.data] }));
      .then((res) => {
        console.log('from App.js ', res.data);
      });
  };

  getHiddenStyle = () => {
    return {
      display: 'none',
    };
  };

  render() {
    const { books } = this.state;
    console.log('app render', books);
    return (
      <Router>
        <Container className="p-3">
          <Header />
          <div style={this.getHiddenStyle()}>
            <AddBookPage books={books} addBook={this.addBook} />
          </div>
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
          <Route path="/about" component={AboutPage} />
          <Route path="/add-book" component={AddBookPage} />
        </Container>
      </Router>
    );
  }
}

export default App;
