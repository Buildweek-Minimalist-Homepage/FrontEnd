import React, {useState} from 'react';
import Todo from './components/Todo';
import './App.css';
import {SearchBar} from './components/SearchBar';
import DailyQuote from './components/DailyQuote';

//import SignInLogIn from './signInLogIn'
// import Clock from './components/Time'
// import Header from './components/Header';

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link
} from 'react-router-dom';





class App extends React.Component {
  render() {
    return (
      
      <Router>
     
      <div>
        {/* <Header/> */}
        <SearchBar/>
        <h2>Welcome to testing!</h2>
        {/* <Clock /> */}
        <Todo/>
        <DailyQuote/>
      </div>
      </Router>
    );
  }
}
export default App;
