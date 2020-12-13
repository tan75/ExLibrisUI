import React, { Component } from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

class BookItem extends Component {
  render() {
    const { book, addToReport } = this.props;
    const { id, pages, title, imageUrl, description } = book;
    return (
      <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={imageUrl} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {pages}
              &ensp;pages
            </Card.Subtitle>
            <Card.Text>{description}</Card.Text>
            <Button
              variant="primary"
              type="submit"
              href="#"
              onClick={addToReport.bind(this, id)}
            >
              Add To Report
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

BookItem.propTypes = {
  book: PropTypes.object.isRequired,
  addToReport: PropTypes.func.isRequired,
};

export default BookItem;
