import { React, useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Books from './components/Books';

const App = () => {
  const [books, setBooks] = useState([
    {
      _id: 111,
      title: 'Harry Potter',
      pages: 100,
      finished: true,
    },
    {
      _id: 222,
      title: 'Yellow Pages',
      pages: 1000,
      finished: false,
    },
  ]);

  // Delete Book
  const deleteBook = (id) => {
    setBooks(books.filter((book) => book._id !== id));
  };

  // Toggle Finished
  const toggleFinished = (id) => {
    console.log(id);
  };

  return (
    <Container fluid>
      <Header title="Books List" />
      {books.length > 0 ? (
        <Books
          books={books}
          onDelete={deleteBook}
          toggleFinished={toggleFinished}
        />
      ) : (
        'No Books Added'
      )}
    </Container>
  );
};

export default App;
