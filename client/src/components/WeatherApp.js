import React, { Component } from 'react'
import Weather from 'simple-react-weather'
import '../index.css';
// const Api_Key = '6a1b99d280501714378f9277c849fca1';
 
class weatherApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempUnits: 'F',
      appId: '6a1b99d280501714378f9277c849fca1',
      city: 'New York'
    };
  }
 
  handleCityInput = (e) => {
    let cityName = e.target.value;
    clearTimeout(this.inputTimeout)
    this.inputTimeout = setTimeout(() => {
      this.setState({
        city: cityName
      })
    }, 800) 
  }
  render () {
    return (
      // <div className="center" >
      <div className="boxes boxCity">
        {/* <h2>Enter City Name</h2> */}
        <input className="weatherInput" onInput={this.handleCityInput} id="city" name="city" placeholder="E.g. New York" />
        {(this.state.city) &&
          <div id="weatherCity">
            <Weather unit={this.state.tempUnits} city={this.state.city} appid={this.state.appId} />
          </div>
        }
      </div>
    )
  }
}
export default weatherApp;