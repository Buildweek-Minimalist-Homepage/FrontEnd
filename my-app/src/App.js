import React, { useState } from 'react';
import Form from './components/SignUpForm';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import SignInForm from './components/SignInForm';
import ReturnInfo from './components/ReturnInfo'

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
    console.log(member)
  }


  return(
    <Router basename="/react-auth-ui/">
    <div className = "App">
      <div className="App__Aside"></div>
      <div className="App__Form">
              <div className="FormTitle">
                  <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> 
                  or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
              </div>
              <Route exact path="/" render={()=> <Form  addMember = {addMember}/>}>
              </Route>
              <Route path="/sign-in" render={()=> <SignInForm  addMember = {addMember}/>}>
              </Route>
              <ReturnInfo members ={members}/>
      </div>
    </div>
    </Router>
  )
}

export default App
/*
      <Form  addMember = {addMember}/>
      <SignInForm  addMember = {addMember}/>
      <ReturnInfo members ={members}/>
*/
