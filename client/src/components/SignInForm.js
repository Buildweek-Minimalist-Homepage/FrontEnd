import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import axiosWithAuth from '../utils/useAxiosAuth';

import HomePageContext from '../contexts/HomePageContext'

const SignInForm = props => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')
  const   newForm = () => {
    setName('');
    setEmail('');
    setpassword('');
  }
  //add a submit handler
  //pass object as argument 
  //handle component with one useState (optional)
  
  return(
<div className="FormCenter">
    <form onSubmit = {(event) => {
      event.preventDefault()
      props.addMember (event, name, email, password) 
      newForm()}} className="FormFields">



      <div className="FormField">
      <label htmlFor = "email" className="FormField__Label">Email</label>
      <input 
        id = "email"
        name = "email"
        type = "email"
        className="FormField__Input" 
        placeholder="Enter your email"
        value = {email}
        required onChange = {(event) => setEmail(event.target.value)}/>
        </div>

      <div className="FormField">
      <label htmlFor = "password" className="FormField__Label">password</label>
      <input 
        id = "password"
        name = "password"
        type = "password"
        value = {password}
        className="FormField__Input" 
        placeholder="Enter your password"
        required onChange = {(event) => setpassword(event.target.value)}/>
        </div>
        
        
              <div className="FormField">
                  <button className="FormField__Button mr-20">Sign In</button> 
                  <Link to="/homepage" className="FormField__Link">Create an account</Link>
              </div>
              
      </form>  
</div>
  );
}

export default SignInForm
