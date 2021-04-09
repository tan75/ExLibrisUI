import { React, useState } from 'react';

const Books = () => {
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
    <>
      {books.map((book) => (
        <h3 key={book._id}>{book._id}</h3>
      ))}
    </>
  );
};

export default Books;
