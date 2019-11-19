import React, { useState } from 'react';
import Form from './components/SignUpForm';
import {Route, NavLink } from 'react-router-dom';
import SignInForm from './components/SignInForm';
import ReturnInfo from './components/ReturnInfo';
import {PrivateRoute} from './utils/PrivateRoute';
import HomePage from './components/HomePage';

import './signInLogIn.css';

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
    <div className = "App">
 
              <nav className="FormTitle">
                  <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> 
                  or <NavLink exact to="/register" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
              </nav>
              <Route exact path="/register" component={Form}/>
              
              <Route exact path="/sign-in" component={SignInForm}/>
              
              {/* <ReturnInfo members ={members}/> */}


                <PrivateRoute exact path='/homepage' component={HomePage}/>

              

    </div>
  )
}

export default App;