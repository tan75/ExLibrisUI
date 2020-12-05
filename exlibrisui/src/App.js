import React, { useState } from 'react';
import './App.css';
import Book from './Book/Book';

export default function App() {
  const [book] = useState([
    {
      title: 'Javascript Part 1',
      pages: 1001,
    },
    {
      title: 'Javascript Part 2',
      pages: 100,
    },
  ]);

  return (
    <div className="App">
      <Book title="Javascript part1">Description: Long Desc</Book>
      <h1>Hello from React</h1>
      <p>Book Title:</p>
      <p>{book[0].title}</p>
      <button type="submit">Switch Title</button>
    </div>
  );
}
