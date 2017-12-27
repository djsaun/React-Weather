import React, { Component } from 'react';

class LocationForm extends Component {
  getWeather(event) {
    event.preventDefault();
    const locationValue = this.location.value;
    this.props.updateLocation(locationValue);
  }

  render() {
    return (
      <form className="location-form" onSubmit={(e) => this.getWeather(e)}>
        <input ref={(input) => this.location = input} type="text" placeholder="Enter location name" />
      </form>
    )
  }
}

export default LocationForm;
