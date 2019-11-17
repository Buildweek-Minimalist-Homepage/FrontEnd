import React from 'react';
import Todo from './components/Todo';
import './App.css';
import {SearchBar} from './components/SearchBar';
// import Header from './components/Header';

import {
  BrowserRouter as Router,
  Route,
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
        <Todo/>
      </div>
      </Router>
    );
  }
}
export default App;
