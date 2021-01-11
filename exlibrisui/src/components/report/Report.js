import axios from 'axios';
import React, { Component } from 'react';
import { Container, Jumbotron } from 'react-bootstrap';

const baseUrl = `http://localhost:8000`;
// const baseUrl = `https://gobananas.work`;

export default class Report extends Component {
  state = {
    report: {},
  };

  componentDidMount() {
    axios.get(`${baseUrl}/api/report`).then((res) => {
      this.setState({ report: res.data });
    });
  }

  render() {
    const { report } = this.state;
    return (
      <Container className="p-3">
        <Jumbotron>
          <h4>Total Pages Finished</h4>
          <p>{report.reportBooks}</p>
        </Jumbotron>
      </Container>
    );
  }
}
