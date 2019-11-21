import React, { useState, useEffect, useContext } from 'react';
import Form from './components/SignUpForm';
import {Route, NavLink } from 'react-router-dom';
import SignInForm from './components/SignInForm';
import ReturnInfo from './components/ReturnInfo';
import {PrivateRoute} from './utils/PrivateRoute';
import HomePage from './components/HomePage';
import HomePageContext from './contexts/HomePageContext';

import './signInLogIn.css';
import { axiosWithAuth } from './utils/useAxiosAuth';
import styled, { css } from 'styled-components'
function App() {
//   //applying a useState hook and setting a state peoperty to members
//  const [members, setMembers] = useState([]);

//   const addMember = (e, name, email, password) => {
//     e.preventDefault();

//     //defining member. The id is predetermined by a timestamp
//     const member = {
//       id: Date.now(),
//       name, 
//       email,
//       password
//     }

//     //What will apply changes to member
//     setMembers([...members, member])
//     console.log(member)
//   }
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
/*const FormTitleLinkActive  = {
  color: 'white',
  borderBottom: '1px solid white'
}
const FormTitleLink = styled.a`color: grey;
text-decoration: none;
display: inline-block;
font-size: 1.7em;
margin: 0 10px;
padding-bottom: 5px;`
*/



const {setHomePage} = useContext(HomePageContext);

useEffect(() => {
  axiosWithAuth().get('/users')
    .then(res => {
      console.log('response data', res.data)
      setHomePage(res.data)
    })
}, [])


  return(
    <SignInLogInForm>
    <AppAside/>
    <AppForm>
              <FormTitle>
                  <NavLink to="/sign-in" 
                  activeClassName="FormTitle__Link--Active" 
                  className="FormTitle__Link">Sign In</NavLink> 

                  or <NavLink exact to="/register" 
                  activeClassName="FormTitle__Link--Active" 
                  className="FormTitle__Link">Sign Up</NavLink>
              </FormTitle>
              <Route exact path="/register" component={Form}/>
              
              <Route exact path="/sign-in" component={SignInForm}/>
              
              {/* <ReturnInfo members ={members}/> */}


                <Route exact path='/homepage' component={HomePage}/>

              
                </AppForm>
    </SignInLogInForm>
  )
}

export default App;