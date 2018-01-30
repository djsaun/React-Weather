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
      displayName: '',
      placeID: '',
      weather: '',
      temp: null,
      humidity: null,
      wind: null,
      unitPreference: 'F'
    }

    this.fetchLocationData = this.fetchLocationData.bind(this);
    this.getPlaceId = this.getPlaceId.bind(this);
    this.updateUnitPreference = this.updateUnitPreference.bind(this);
  }
  
  updateUnitPreference(e) {
    const unitPref = e.target.value;
    this.setState({
      unitPreference: unitPref
    })
  }

  async fetchLocationData(locationName, unitPreference = this.state.unitPreference) {
    if (locationName) {
      const unit = ((unitPreference === 'F') ? 'imperial' : 'metric');
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${locationName},us&units=${unit}&mode=json&appid=${process.env.REACT_APP_WEATHER_API}`
      const response = await axios.get(url).then(function (response) {
        console.log(response.data);
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

 async getPlaceId(locationName) {
  const locationDetails = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(locationName)}&key=${process.env.REACT_APP_GOOGLE_API}`)
  .then(function(res) {
    console.log(res.data);
    return res.data;
  })

  this.setState({
    displayName: locationDetails.results[0].formatted_address,
    placeID: locationDetails.results[0].place_id
  })
 } 

  componentWillUpdate(nextProps, nextState) {
    if (this.state.unitPreference !== nextState.unitPreference) {
      this.fetchLocationData(nextState.location, nextState.unitPreference);
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">Weather</h1>
        <LocationForm fetchLocationData={this.fetchLocationData} updateUnitPreference={this.updateUnitPreference} getPlaceId={this.getPlaceId} unit={this.state.unitPreference} />
        <Widget weather={this.state} />
      </div>
    );
  }
}

export default App;
