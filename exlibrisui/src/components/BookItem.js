import React, { Component } from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

class BookItem extends Component {
  render() {
    const { book } = this.props;
    return (
      <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={book.imageUrl} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {book.pages}
              &ensp;pages
            </Card.Subtitle>
            <Card.Text>{book.description}</Card.Text>
            <Button variant="primary" onClick={this.addToReport}>
              Add To Report
            </Button>
            <p>{book.description}</p>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

BookItem.propTypes = {
  book: PropTypes.object.isRequired,
};

export default BookItem;
