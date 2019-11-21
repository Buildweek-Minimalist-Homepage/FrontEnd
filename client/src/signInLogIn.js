import React, { useState } from 'react';
import Form from './components/SignUpForm';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import SignInForm from './components/SignInForm';
import ReturnInfo from './components/ReturnInfo';
import styled, { css } from 'styled-components'


import './signInLogIn.css';

/*
const SignInLogInForm = styled.div `height: 100vh; display: flex;`;
const AppAside = styled.div `width: 25%;`;
const AppForm = styled.div `margin-top: 15%;
width: 50%;
height: 30%;
background-color: darkslategrey;
padding: 25px 40px;
overflow: auto;`;
const FormTitle = styled.nav`color: grey;
font-weight: 300;
margin-bottom: 50px;`

*/


const 
function SignInLogIn() {
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
    <div className="App__Aside"></div>
    <div className="App__Form">
              <div className="FormTitle">
                  <NavLink to="/sign-in" 
                  activeClassName="FormTitle__Link--Active" 
                  className="FormTitle__Link">Sign In</NavLink> 

                  or <NavLink exact to="/register" 
                  activeClassName="FormTitle__Link--Active" 
                  className="FormTitle__Link">Sign Up</NavLink>
              </div>
              <Route exact path="/register" component={Form}/>
              
              <Route exact path="/sign-in" component={SignInForm}/>
              
              {/* <ReturnInfo members ={members}/> */}


                <Route exact path='/homepage' component={HomePage}/>

              
                </div>
    </div>
  )
}

export default SignInLogIn