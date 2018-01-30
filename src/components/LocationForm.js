import React, { Component } from 'react';

class LocationForm extends Component {

  getWeather(event) {
    event.preventDefault();
    const locationValue = this.location.value;
    const unitPreference = this.props.unit || this.unit.value;
    
    this.props.fetchLocationData(locationValue, unitPreference);
    this.props.getPlace(locationValue);
  }

  render() {
    
    return (
      <form className="location-form" onSubmit={(e) => this.getWeather(e)}>
        <input ref={(input) => this.location = input} type="text" placeholder="Enter location name" required />
        <input ref={(input) => this.unit = input} onChange={this.props.updateUnitPreference} name="unit" type="radio" value="F" defaultChecked /> F
        <input ref={(input) => this.unit = input} onChange={this.props.updateUnitPreference} name="unit" type="radio" value="C" /> C
      </form>
    )
  }
}

export default LocationForm;
