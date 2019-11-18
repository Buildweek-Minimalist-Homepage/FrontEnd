import React, {useState} from 'react'
import { Link } from 'react-router-dom';



const Form = props => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')
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
      <label htmlFor = "name" className="FormField__Label">Name</label>
      <input 
        id = "name"
        name = "name"
        type = "text"
        placeholder="Enter your full name"
        className="FormField__Input" 
        required onChange = {(event) => setName(event.target.value)}/>
        </div>

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
                  <button className="FormField__Button mr-20">Create an account</button> 
                  <Link to="/sign-in" className="FormField__Link">Sign In</Link>
              </div>
              
      </form>  
</div>
  );
}

export default Form
