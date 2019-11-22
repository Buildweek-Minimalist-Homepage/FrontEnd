import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom';
import {axiosWithAuth} from '../utils/useAxiosAuth';

import HomePageContext from '../contexts/HomePageContext';
import styled, { css } from 'styled-components'

const FormCenter = styled.div`margin-bottom: 100px;
display:flex;
justify-content:center
`
const FormTitle = styled.div`color: grey;
font-weight: 300;
margin-bottom: 50px;
background:blue;`
const FormFields = styled.div`margin-top: 40px;`
const Wraping = styled.div`background-color: rgba(18, 18, 18, 0.66); width:150%`
  

const SignInForm = ({history}) => {
  const { setIsLoggedIn } = useContext(HomePageContext);

  const [creds, setCreds] = useState({ email: '', password: ''});

  const handleChange = e => {
    setCreds({ ...creds, [e.target.name] : e.target.value});
  }

  const login = e => {
    e.preventDefault();
        if(creds.email.length ===3 || creds.password.length ===3){
            alert("Youre missing something there")
        }

    axiosWithAuth()
      .post('/auth/login', creds)
      .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.token);
        setIsLoggedIn(true);
        history.push('/homepage');
      })
      .catch(err => console.error(err));
  }; 
  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  // const [password, setpassword] = useState('')
  // const   newForm = () => {
  //   setName('');
  //   setEmail('');
  //   setpassword('');
  // }npm install --save simple-react-weather
  //add a submit handler
  //pass object as argument 
  //handle component with one useState (optional)
  
  return(
    <FormCenter>
      <FormFields>
        <Wraping>
          <form onSubmit = {login} className="FormFields">
            <div className="FormField">
              <label htmlFor = "email" className="FormField__Label">Email</label>
              <input 
                id = "email"
                name = "email"
                type = "email"
                className="FormField__Input" 
                placeholder="Enter your email"
                value = {creds.email}
                onChange = {handleChange}/>
            </div>

            <div className="FormField">
              <label htmlFor = "password" className="FormField__Label">password</label>
              <input 
                id = "password"
                name = "password"
                type = "password"
                value = {creds.password}
                className="FormField__Input" 
                placeholder="Enter your password"
                onChange = {handleChange}/>
            </div>
              
            <div className="FormField">
                <button className="FormField__Button mr-20">Sign In</button> 
                <Link to="/register" className="FormField__Link">Create an account</Link>
            </div>
          </form>
        </Wraping>
      </FormFields>  
    </FormCenter>
  );
}

export default SignInForm
