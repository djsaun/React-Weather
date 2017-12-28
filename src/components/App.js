import React, { Component } from 'react';
import '../styles/App.css';
import LocationForm from './LocationForm';
import Widget from './Widget';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: '',
      weather: '',
      temp: null,
      humidity: null,
      wind: null
    }

    this.fetchLocationData = this.fetchLocationData.bind(this);
  }
  
  async fetchLocationData(locationName) {
    const initialLocation = this.state.location;
    const initialWeather = this.state.weather;
    const initialTemp = this.state.temp;
    const initialHumidity = this.state.humidity;
    const initialWind = this.state.initialWind; 
    
    if (locationName) {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${locationName},us&mode=json&appid=c633227f66282756bc670cd695388091`
      const response = await axios.get(url).then(function (response) {
        return response.data;
      });

      this.setState({
        location: locationName,
        weather: response.weather[0].main,
        temp: response.main.temp,
        humidity: response.main.humidity,
        wind: response.wind.speed
      });
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">Weather</h1>
        <LocationForm fetchLocationData={this.fetchLocationData} />
        <Widget weather={this.state} />
      </div>
    );
  }
}

export default App;
