import React, { Component } from 'react';
import styled from 'styled-components';

const TimeContainer = styled.div`
  position: fixed;
  bottom: 550px;
`

export default class Clock extends Component {
    render () {
    const date = new Date()
    const hours = date.getHours()
    const rightNow = date.toLocaleTimeString()
    let timeOfDay
    const h1Style = {
      fontSize: '40px',
    }
    
    if (hours < 12) {
      timeOfDay = "Morning"
    } else if (hours >= 12 && hours < 17) {
       timeOfDay = "afternoon"
    } else {
       timeOfDay = "night"
    } 
    return (
      <div>
        <h1 style={h1Style}>Good {timeOfDay.split(' ')
                         .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase()).join(" ")} </h1>
        <h2>{rightNow}</h2>
      </div>
      )
  }
}
  
  function tick () {
      ReactDOM.render(<App />, document.getElementById('root'))
  }
  
  setInterval(tick, 1000);

