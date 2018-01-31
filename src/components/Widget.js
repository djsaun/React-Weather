import React, { Component } from 'react';

class Widget extends Component {  
  render() {
    const {location, weather, temp, maxTemp, minTemp, humidity, wind, windDeg, unitPreference} = this.props.weather;

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
          <div className="conditions">
            <div className="icon">
              Icon goes here
            </div>
            <div className="temperature">
              <h3>{temp}°</h3>
              <div className="high-low">
                <div className="high">{maxTemp}°</div>
                <div className="low">{minTemp}°</div>
              </div>
            </div>
          </div>
          <div className="wind">
            <p>The wind is {wind} {windSpeed} {windDirection}</p>
          </div>
          <div className="humidity">
            <p>The humidity is {humidity}%</p>
          </div>
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
