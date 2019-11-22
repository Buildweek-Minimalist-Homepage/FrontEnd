import React, { useEffect, useContext } from 'react';
import Form from './components/SignUpForm';
import {Route } from 'react-router-dom';
import SignInForm from './components/SignInForm';

import {PrivateRoute} from './utils/PrivateRoute';
import HomePage from './components/HomePage';
import HomePageContext from './contexts/HomePageContext';

import './App.css';

import './signInLogIn.css';
import { axiosWithAuth } from './utils/useAxiosAuth';
import styled from 'styled-components'

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
const SignInLogInForm = styled.div `height: 100%; display: flex;`;
// const AppAside = styled.div `width: 25%;`;
// const AppForm = styled.div `
// display: flex;
// flex-direction: column;
// margin-top: 5%;
// width: 50%;
// height: 1%;
// background-color: darkslategrey;
// padding: 25px 40px;
// overflow: auto;`;

// const FormTitle = styled.nav`color: grey;
// font-weight: 300;
// margin-bottom: 50px;`
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
const Wraping = styled.div`box-sizing: border-box;`


const {setHomePage} = useContext(HomePageContext);

useEffect(() => {
  axiosWithAuth().get('/users')
    .then(res => {
      console.log('response data', res.data)
      setHomePage(res.data)
    })
}, [])


  return(
    <Wraping>
    <SignInLogInForm/>
   {/*<AppAside/>*/}
    {/* <AppForm> */}
              {/* <FormTitle>
                  <NavLink to="/sign-in" 
                  activeClassName="FormTitle__Link--Active" 
                  className="FormTitle__Link">Sign In</NavLink> 

                  or <NavLink exact to="/register" 
                  activeClassName="FormTitle__Link--Active" 
                  className="FormTitle__Link">Sign Up</NavLink>
              </FormTitle> */}


              
              {/* <ReturnInfo members ={members}/> */}
     {/* </AppForm> */}
            <Route exact path="/register" component={Form}/>
            
            <Route exact path="/" component={SignInForm}/>

            <PrivateRoute exact path='/homepage' component={HomePage}/>
      
    </Wraping>
    
  )
}

export default App;