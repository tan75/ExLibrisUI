import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import axios from 'axios';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';

export default class AddBook extends Component {
  state = {
    title: '',
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.addBook(this.state.title);
    this.setState({ title: '' });
  };

  addBook = (title) => {
    axios
      .post('http://localhost:8000/admin/add-book/', {
        title: 'REST API',
        imageUrl:
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.hellogiggles.com%2Fuploads%2F2016%2F12%2F18043538%2Fshutterstock_91553819.jpg&f=1&nofb=1',
        pages: '333',
        description: '333 desc',
      })
      // .then((res) =>
      //   this.books.setState({ books: [...this.state.books, res.data] })
      // );
      .then((res) => {
        console.log(res.data);
        // console.log(this.props.books);
      });
  };

  render(props, state) {
    console.log('props', props); // Returns undefined
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Row>
          <Form.Group controlId="formGridBookDetails">
            <Form.Label>Add Book</Form.Label>
            <Form.Control
              type="text"
              name="title"
              placeholder="Book Title"
              value={this.state.title}
              onChange={this.onChange}
            />
          </Form.Group>
        </Form.Row>
        <Button variant="primary" type="submit" value="Submit">
          Submit
        </Button>
      </Form>
    );
  }
}

// AddBook.propTypes = {
//   books: PropTypes.object.isRequired,
// };
