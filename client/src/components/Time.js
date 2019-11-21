import React, { Component} from 'react';

const TimeContainer = styled.div`
  position: fixed;
  bottom: 550px;
`

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
        fontSize: '40px',
      }
    

    

    return (
      <div>
        <h1 style={h1Style}>Good {this.state.timeOfDay} </h1>
        <h2>{this.state.time}</h2>
      </div>
      )
  }
}
  
  // function tick () {
  //     ReactDOM.render(<App />, document.getElementById('root'))
  // }
  
  // setInterval(tick, 1000);

