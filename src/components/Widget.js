import React, { Component } from 'react';

class Widget extends Component {  
  render() {
    const {location, displayName, weather, temp, humidity, wind, unitPreference} = this.props.weather;


    console.log(unitPreference)

    const windSpeed = ((unitPreference === 'F') ? 'mph' : 'mps');
    
    if (location) {
      return (
        <div className="city-details">
          {/* <div><img src={map} alt={displayName} /></div> */}
          <p>{displayName}</p>
          <div className="wind">
            <p>The wind is {wind} {windSpeed}</p>
          </div>
          <p>It is currently {temp}° {unitPreference}</p>
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
