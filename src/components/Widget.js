import React, { Component } from 'react';

class Widget extends Component {  
  render() {
    const {location, weather, temp, humidity, wind} = this.props.weather; 

    if (location) {
      return (
        <div>
          <p>{location}</p>
          <p>It is currently {temp}°</p>
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
