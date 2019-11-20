import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom';
import {axiosWithAuth} from '../utils/useAxiosAuth';

import HomePageContext from '../contexts/HomePageContext';

const SignInForm = ({history}) => {
  const { setIsLoggedIn } = useContext(HomePageContext);

  const [creds, setCreds] = useState({ email: '', password: ''});

  const handleChange = e => {
    setCreds({ ...creds, [e.target.name] : e.target.value});
  }

  const login = e => {
    e.preventDefault();

    axiosWithAuth()
      .post('/auth/login', creds)
      .then(res => {
        console.log(creds);
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
  // }
  //add a submit handler
  //pass object as argument 
  //handle component with one useState (optional)
  
  return(

  <div className="FormCenter">
    <form onSubmit = {login} className="FormFields">

      <div className="FormField">
      
      <input 
        id = "email"
        name = "email"
        type = "email"
        // className="FormField__Input" 
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
  </div>
  );
}

export default SignInForm
