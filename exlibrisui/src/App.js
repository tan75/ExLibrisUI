import React, { Component } from 'react';
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
      <div>
        <Books
          books={books.map((book) => (
            <div>{book.title}</div>
          ))}
        />
      </div>
    );
  }
}

export default App;
