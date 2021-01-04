import axios from 'axios';
import React, { Component } from 'react';

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
    return <h1>{report.reportBooks}</h1>;
  }
}
