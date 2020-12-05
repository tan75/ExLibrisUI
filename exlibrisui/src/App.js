import React from 'react';
import './App.css';
import Book from './Book/Book';

export default function App() {
  return (
    <div className="App">
      <Book title="Javascript part1">Description: Long Desc</Book>
      <h1>Hello from React</h1>
      <button type="submit">Switch Title</button>
    </div>
  );
}
