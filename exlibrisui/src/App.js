import React, { Component } from 'react';
import './App.css';
import Book from './Book/Book';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          title: 'Javascript Part 1',
          pages: 1001,
        },
        {
          title: 'Javascript Part 2',
          pages: 100,
        },
      ],
    };
  }

  switchTitleHandler = () => {
    this.setState({
      books: [
        {
          title: 'Javascript Part 100',
          pages: 1001,
        },
        {
          title: 'Javascript Part 2',
          pages: 100,
        },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <Book title="Title 1">Description: Long Desc</Book>
        <h1>Hello from React</h1>
        <p>Book Title:</p>
        <p>{this.state.books[0].title}</p>
        <p>{this.state.books[0].pages}</p>
        <button type="submit" onClick={this.switchTitleHandler}>
          Switch Title
        </button>
      </div>
    );
  }
}

export default App;
