import { React, useState } from 'react';
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

  return (
    <div className="container">
      <Header title="Books List" />
      <Books books={books} />
    </div>
  );
};

export default App;
