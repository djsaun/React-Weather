import React, { Component } from 'react';

class Widget extends Component {  
  render() {
    const {location, displayName, weather, temp, humidity, wind} = this.props.weather; 

    if (location) {
      return (
        <div className="city-details">
          <p>{displayName}</p>
          <div className="wind">
            <p>The wind is {wind}</p>
          </div>
          <p>It is currently {temp}°</p>
          <p>It is currently {weather}</p>
          <p>The humidity is {humidity}</p>
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
