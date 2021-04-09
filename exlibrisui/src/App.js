import React from 'react';
import Header from './components/Header';
import Books from './components/Books';

const App = () => {
  return (
    <div className="container">
      <Header title="Books List" />
      <Books />
    </div>
  );
};

export default App;
