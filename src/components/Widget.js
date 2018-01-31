import React, { Component } from 'react';

class Widget extends Component {  
  render() {
    const {location, weather, temp, humidity, wind, windDeg, unitPreference} = this.props.weather;

    const windSpeed = ((unitPreference === 'F') ? 'mph' : 'mps');
    let windDirection = '';

    if (windDeg>337.5) {
      windDirection = 'N';
    } 
    if (windDeg>292.5) {
      windDirection = 'NW';
    } 
    if(windDeg>247.5) {
      windDirection = 'W';
    }
    if(windDeg>202.5) {
      windDirection = 'SW';
    } 
    if(windDeg>157.5) {
      windDirection = 'S';
    } 
    if(windDeg>122.5) {
      windDirection = 'SE';
    } 
    if(windDeg>67.5) {
      windDirection = 'E';
    } 
    if(windDeg>22.5) {
      windDirection = 'NE';
    }
    
    if (location) {
      return (
        <div className="city-details">
          <div className="wind">
            <p>The wind is {wind} {windSpeed} {windDirection}</p>
          </div>
          <p>It is currently {temp}° {unitPreference}</p>
          <p>It is currently {weather}</p>
          <p>The humidity is {humidity}%</p>
        </div>
      )
    } else {
      return(
        <p></p>
      )
    }
  }
}

export default Widget;
