import React, { Component } from 'react';

class Header extends Component {
  render() {

    let mapStyle = {};
    if (this.props.displayName) {
      mapStyle = {
        backgroundImage: `url(${this.props.map})`
      }
    }

    return (
      <div className="location-header" style={mapStyle}>
        <h1>Weather</h1>
      </div>
    )
  }
}

export default Header;
