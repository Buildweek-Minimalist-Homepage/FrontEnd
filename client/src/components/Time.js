import React, { Component} from 'react';
import styled from 'styled-components'


export class Clock extends Component {

    constructor() {
      super()
      this.state = {
        time: new Date().toLocaleTimeString(),
        hours: 0,
        timeOfDay: ''
      }
    }

    
    componentDidMount() {
      




      const date = new Date()
    const hours = date.getHours()
    this.setState({hours: hours})
    // const rightNow = date.toLocaleTimeString()
    // this.setState({ time: rightNow, hours: hours})
    // if (this.state.hours < 12) {
    //   this.setState({timeOfDay: "Morning"}) 
    // } else if (this.state.hours >= 12 && this.state.hours < 17) {
    //    this.setState({timeOfDay: "Afternoon"}) 
    // } else {
    //    this.setStAte({timeOfDay: "Night"}) 
    // } 
    this.interval = setInterval(() => this.tick(), 1000)
    }
    componentWillUnmount() {
      clearInterval(this.interval)
    }

    tick() {
      console.log('is ticking')
      this.setState({time: new Date().toLocaleTimeString()})
      

      if (this.state.hours < 12) {
        this.setState({timeOfDay: "Morning"}) 
      } else if (this.state.hours >= 12 && this.state.hours < 17) {
         this.setState({timeOfDay: "Afternoon"}) 
      } else {
         this.setState({timeOfDay: "Night"}) 
      } 
    }
    render () {
      const h1Style = {
        fontSize: '60px',
      }
    


            //STYLING
            const ClockContainer = styled.div ` 
            display: flex;
            flex-flow: column wrap;
            justify-content: space-around;
            color: white;
            background: inherit;
            align-items: center;
            border-radius: 5px;
            width: 25vw;
            height: 35vh;
            position: relative;
            overflow: hidden;

            &:before {
              content: '';
              background: inherit;
              position: absolute;
              left: -25px;
              right: -25px;
              top: -25px; 
              bottom: -25px;
              box-shadow: inset 0 0 0 3000px rgba(255, 255, 255, 0.3);
              filter: blur(10px);
            }
            `;

            const H2Style = styled.h2`
              font-size: 40px;
            `

    return (
      <ClockContainer>
        <h1 style={h1Style}>Good {this.state.timeOfDay} </h1>
        <H2Style>{this.state.time}</H2Style>
      </ClockContainer>
      )
  }
}
  
  // function tick () {
  //     ReactDOM.render(<App />, document.getElementById('root'))
  // }
  
  // setInterval(tick, 1000);

