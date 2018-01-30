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
      <div>
        <p>Enter A City</p>
        <form className="location-form" onSubmit={(e) => this.getWeather(e)}>
          <input ref={(input) => this.location = input} type="text" placeholder="Enter location name" required />
          <div className="input-toggle">
            <input id="F" ref={(input) => this.unit = input} onChange={this.props.updateUnitPreference} name="unit" type="radio" value="F" defaultChecked />
            <label htmlFor="F">F</label>
            <input id="C" ref={(input) => this.unit = input} onChange={this.props.updateUnitPreference} name="unit" type="radio" value="C" />
            <label htmlFor="C">C</label>
            <span className="outside-toggle">
              <span className="inside-toggle"></span>
            </span>
          </div>
        </form>
      </div>
    )
  }
}

export default LocationForm;
