import axios from 'axios';
import React, { Component } from 'react';
import { Container, Jumbotron } from 'react-bootstrap';

export default class Report extends Component {
  state = {
    report: {},
  };

  componentDidMount() {
    axios.get('http://localhost:8000/api/report').then((res) => {
      this.setState({ report: res.data });
    });
  }

  render() {
    const { report } = this.state;
    return (
      <Container className="p-3">
        <Jumbotron>
          <h4>Total Pages</h4>
          <p>{report.reportBooks}</p>
        </Jumbotron>
      </Container>
    );
  }
}
