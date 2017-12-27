import React, { Component } from 'react';
import '../styles/App.css';
import LocationForm from './LocationForm';

class App extends Component {
  constructor() {
    super();

    this.updateLocation = this.updateLocation.bind(this);

    this.state = {
      location: ''
    }
  }

  updateLocation(locationName) {
    let location = this.state.location;
    location = locationName;
    this.setState({location});
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">Weather</h1>
        <LocationForm updateLocation={this.updateLocation} />
      </div>
    );
  }
}

export default App;
