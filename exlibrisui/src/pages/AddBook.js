import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import axios from 'axios';

export default class AddBook extends Component {
  state = {
    title: '',
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    // this.props.addBook(this.state.title);
    this.setState({ title: '' });
  };

  render() {
    console.log('Props of AddBook ', this.props);
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

AddBook.propTypes = {
  // books: PropTypes.object.isRequired,
  // addBook: PropTypes.func.isRequired,
};
