import React, { Component } from 'react';

class Widget extends Component {  
  render() {
    const {location, displayName, weather, temp, humidity, wind} = this.props.weather;
    const map = `https://maps.googleapis.com/maps/api/staticmap?center=${displayName}&zoom=13&size=600x300&maptype=roadmap&key=${process.env.REACT_APP_STATIC_MAP_API}`

    if (location) {
      return (
        <div className="city-details">
          <div><img src={map} alt={displayName} /></div>
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
