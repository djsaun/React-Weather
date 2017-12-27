import React, { Component } from 'react';

class Widget extends Component {
  render() {
    return (
      <p>{this.props.location}</p>
    )
  }
}

export default Widget;
