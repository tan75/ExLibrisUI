import axios from 'axios';
import React, { Component } from 'react';

export default class Report extends Component {
  componentDidMount() {
    axios
      .get('http://localhost:8000/api/report')
      .then((res) => console.log(res));
  }

  render() {
    return (
      <div>
        <h1>Report</h1>
      </div>
    );
  }
}
