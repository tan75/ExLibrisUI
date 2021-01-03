import React, { Component } from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default class AddBook extends Component {
  state = {
    title: '',
    imageUrl: '',
    pages: '',
    description: '',
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addBook(
      this.state.title,
      this.state.imageUrl,
      this.state.pages,
      this.state.description
    );
    this.setState({
      title: '',
      imageUrl: '',
      pages: '',
      description: '',
    });
  };

  render() {
    return (
      <Container fluid>
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="formBookTitle">
            <Form.Label>Book Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              placeholder="Book Title"
              value={this.state.title}
              onChange={this.onChange}
            />
          </Form.Group>
          <Form.Group controlId="formBookImageUrl">
            <Form.Label>Image Url</Form.Label>
            <Form.Control
              type="url"
              name="imageUrl"
              placeholder="Image URL"
              value={this.state.imageUrl}
              onChange={this.onChange}
            />
          </Form.Group>
          <Form.Group controlId="formBookPages">
            <Form.Label>Pages</Form.Label>
            <Form.Control
              type="text"
              name="pages"
              placeholder="Number of Pages"
              value={this.state.pages}
              onChange={this.onChange}
            />
          </Form.Group>
          <Form.Group controlId="formBookDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              placeholder="Description"
              value={this.state.description}
              onChange={this.onChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit" value="Submit">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

AddBook.propTypes = {
  addBook: PropTypes.func.isRequired,
};
