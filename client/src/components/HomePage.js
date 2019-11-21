import React from 'react';

import Header from './Header';
import SearchBar from './SearchBar';
import Todo from './Todo';
import DailyQuote from "./DailyQuote"
// import WeatherForm from "./components/WeatherForm";
// import Weather from "./components/Weather";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "weather-icons/css/weather-icons.css";
// const Api_Key = '6a1b99d280501714378f9277c849fca1';

import {Clock} from './Time';
import styled from "styled-components";


const SearchBarWrap = styled.div`display: block;
margin-top: 5%;
margin-left:1%`
const ClockWrap = styled.div`display: block;
margin-top: 5%;
margin-left:1%`


const HomePage = () => {
  //   constructor() {
  //       super();
  //       this.state = {
  //         city: undefined,
  //         country: undefined,
  //         icon: undefined,
  //         main: undefined,
  //         celsius: undefined,
  //         temp_max: null,
  //         temp_min: null,
  //         description: "",
  //         error: false
  //       };
  //       this.weatherIcon = {
  //         Thunderstorm: "wi-thunderstorm",
  //         Drizzle: "wi-sleet",
  //         Rain: "wi-storm-showers",
  //         Snow: "wi-snow",
  //         Atmosphere: "wi-fog",
  //         Clear: "wi-day-sunny",
  //         Clouds: "wi-day-fog"
  //       };
  //     }
  //     get_WeatherIcon(icons, rangeId) {
  //       switch (true) {
  //         case rangeId >= 200 && rangeId < 232:
  //           this.setState({ icon: icons.Thunderstorm });
  //           break;
  //         case rangeId >= 300 && rangeId <= 321:
  //           this.setState({ icon: icons.Drizzle });
  //           break;
  //         case rangeId >= 500 && rangeId <= 521:
  //           this.setState({ icon: icons.Rain });
  //           break;
  //         case rangeId >= 600 && rangeId <= 622:
  //           this.setState({ icon: icons.Snow });
  //           break;
  //         case rangeId >= 701 && rangeId <= 781:
  //           this.setState({ icon: icons.Atmosphere });
  //           break;
  //         case rangeId === 800:
  //           this.setState({ icon: icons.Clear });
  //           break;
  //         case rangeId >= 801 && rangeId <= 804:
  //           this.setState({ icon: icons.Clouds });
  //           break;
  //         default:
  //           this.setState({ icon: icons.Clouds });
  //       }
  //     }

  //     calFahrenheit(temp) {
  //   let cell = Math.floor((temp - 273.15) * 9/5 + 32);
  //   return cell;
  // }
  // getWeather = async e => {
  //   e.preventDefault();
  //   const country = e.target.elements.country.value;
  //   const city = e.target.elements.city.value;
  //   if (country && city) {
  //     const api_call = await fetch(
  //       `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`
  //     );
  //     const response = await api_call.json();
  //     this.setState({
  //       city: `${response.name}, ${response.sys.country}`,
  //       country: response.sys.country,
  //       main: response.weather[0].main,
  //       fahrenheit: this.calFahrenheit(response.main.temp),
  //       temp_max: this.calFahrenheit(response.main.temp_max),
  //       temp_min: this.calFahrenheit(response.main.temp_min),
  //       description: response.weather[0].description,
  //       error: false
  //     });

  //     this.get_WeatherIcon(this.weatherIcon, response.weather[0].id);
  //     console.log(response);
  //   } else {
  //     this.setState({
  //       error: true
  //     });
  //   }
  // };

     
    return (
        <div>
            <Header/>
            <SearchBarWrap>
            <SearchBar/>
            </SearchBarWrap>
            
            <Clock/>
            
            <Todo/>
            <DailyQuote/>
            {/* <WeatherForm loadweather={this.getWeather} error={this.state.error} />
        <Weather
          cityname={this.state.city}
          weatherIcon={this.state.icon}
          temp_fahrenheit={this.state.fahrenheit}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min}
          description={this.state.description}
        /> */}
        </div>
    )
}



export default HomePage;