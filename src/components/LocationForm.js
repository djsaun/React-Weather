import React, { Component } from 'react';

class LocationForm extends Component {

  getWeather(event) {
    event.preventDefault();
    const locationValue = this.location.value;
    const unitPreference = this.props.unit || this.unit.value;
    // const displayName = this.props.displayName;

    // console.log(displayName)
    this.props.fetchLocationData(locationValue, unitPreference);
    this.props.getPlace(locationValue);
    // this.props.getMap(this.location.value)
  }

  render() {

    let mapStyle = {};
    if (this.props.displayName) {
      mapStyle = {
        backgroundImage: `url(${this.props.map})`
      }
    }
    
    return (
      <div className="location-header" style={mapStyle}>
        <form className="location-form" onSubmit={(e) => this.getWeather(e)}>
          <input ref={(input) => this.location = input} type="text" placeholder="Enter location name" required />
          <input ref={(input) => this.unit = input} onChange={this.props.updateUnitPreference} name="unit" type="radio" value="F" defaultChecked /> F
          <input ref={(input) => this.unit = input} onChange={this.props.updateUnitPreference} name="unit" type="radio" value="C" /> C
        </form>
      </div>
    )
  }
}

export default LocationForm;
