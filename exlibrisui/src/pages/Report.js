import axios from 'axios';
import React, { Component } from 'react';

export default class Report extends Component {
  state = {
    report: {},
  };

  componentDidMount() {
    axios.get('http://localhost:8000/api/report').then((res) => {
      this.setState({ report: res.data.reportBooks });
      console.log(res.data);
    });
  }

  render() {
    console.log(this.state.report);
    return (
      <div>
        <h1>rr</h1>
      </div>
    );
  }
}
