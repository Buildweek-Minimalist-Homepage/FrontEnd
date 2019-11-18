import React, { useState } from 'react';
import Form from './components/SignUpForm';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import SignInForm from './components/SignInForm';

import './App.css';

function App() {
  //applying a useState hook and setting a state peoperty to members
 const [members, setMembers] = useState([]);

  const addMember = (e, name, email, password) => {
    e.preventDefault();

    //defining member. The id is predetermined by a timestamp
    const member = {
      id: Date.now(),
      name, 
      email,
      password
    }

    //What will apply changes to member
    setMembers([...members, member])
  }

  //return the components that will be displayed 
  // Form is the input that will receive information (email, name, role)
  // TeamList will display the input information from Form
  return(
    <Router basename="/react-auth-ui/">
    <div className = "App">
      <div className="App__Aside"></div>
      <div className="App__Form">
              <div className="FormTitle">
                  <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> 
                  or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
              </div>
      
              <Route exact path="/" component={Form}>
              </Route>
              <Route path="/sign-in" component={SignInForm}>
              </Route>
      </div>
    </div>
    </Router>
  )
}

export default App
/*
      <Form addMember = {addMember}/>
      <TeamList members ={members}/>
*/
