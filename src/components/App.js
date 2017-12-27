import React, { Component } from 'react';
import '../styles/App.css';
import LocationForm from './LocationForm';
import Widget from './Widget';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.updateLocation = this.updateLocation.bind(this);
    this.fetchLocationData = this.fetchLocationData.bind(this);

    this.state = {
      location: ''
    }
  }

  updateLocation(locationName) {
    let location = this.state.location;
    location = locationName;
    this.setState({location});
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${locationName},us&mode=json&appid=c633227f66282756bc670cd695388091`
    const response = axios.get(url);
    console.log(response);
  }

  fetchLocationData(cityName) {
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName},us&mode=xml&appid=c633227f66282756bc670cd695388091`
    const response = axios.get(url);
    console.log(response);
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">Weather</h1>
        <LocationForm updateLocation={this.updateLocation} />
        <Widget fetchLocationData={this.fetchLocationData} />
      </div>
    );
  }
}

export default App;
