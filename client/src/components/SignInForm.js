import React, {useState} from 'react'
import { Link } from 'react-router-dom';


const SignInForm = props => {

  //set name and change namen
  const [name, setName] = useState('')
  //set email and change email
  const [email, setEmail] = useState('')
  // set a password and change password
  const [password, setpassword] = useState('')
  //creates a new form
  const   newForm = () => {
    setName('');
    setEmail('');
    setpassword('');
  }
  
  
  return(
<div className="FormCenter">
    <form onSubmit = {(event) => {
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
        type = "text"
        value = {password}
        className="FormField__Input" 
        placeholder="Enter your password"
        required onChange = {(event) => setpassword(event.target.value)}/>
        </div>
        
        
              <div className="FormField">
                  <button className="FormField__Button mr-20">Sign In</button> 
                  <Link to="/" className="FormField__Link">Create an account</Link>
              </div>
              
      </form>  
</div>
  );
}

export default SignInForm
