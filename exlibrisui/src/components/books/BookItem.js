import React, { Component } from 'react';
import { Col, Card, Button, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

class BookItem extends Component {
  render() {
    const { book, addToReport, deleteBook } = this.props;
    const { _id, pages, title, imageUrl, description } = book;
    return (
      <Container className="p-3" fluid>
        <Col>
          <Card>
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
                /* onClick={addToReport.bind(this, _id)} */
              >
                Add To Report
              </Button>
              &nbsp;
              <Button
                variant="danger"
                type="submit"
                /* onClick={deleteBook.bind(this, _id)} */
              >
                Delete
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Container>
    );
  }
}

BookItem.propTypes = {
  book: PropTypes.object.isRequired,
  addToReport: PropTypes.func.isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default BookItem;
