import React, { Component } from 'react'
import Weather from 'simple-react-weather'
const Api_Key = '6a1b99d280501714378f9277c849fca1';
 
class weatherApp extends Component {
  render () {
    return (
      <div>
      {/* With city name provided */}
        <div className='form'>
          <form>
          <input id='city' name='city' placeholder='E.g New York' />
          
          <button>Get Weather</button>
          </form>
        </div>
          <Weather unit="F" city="las vegas" appid={Api_Key} />
      {/* Based on latitude and longitude */}
      {/* <Weather unit="F" lat="" lon="" appid={Api_Key} /> */}
      </div>
    )
  }
}
export default weatherApp;