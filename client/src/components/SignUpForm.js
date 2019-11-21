import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import {axiosWithAuth} from '../utils/useAxiosAuth';
import styled, { css } from 'styled-components'



const Form = ({history}) => {
  const [creds, setCreds] = useState({ name: '', email: '', password: ''});

  const handleChange = e => {
    setCreds({...creds, [e.target.name]: e.target.value});
  }

  const signup = e => {

    console.log(creds);
    axiosWithAuth().post('/auth/register', creds)
      .then(res => {
        console.log(res.data);
        history.push('/login');
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
  
  const FormCenter = styled.div`margin-bottom: 100px;`
  const FormTitle = styled.div`color: grey;
  font-weight: 300;
  margin-bottom: 50px;`
  const FormFields = styled.div`margin-bottom: 40px;`

  

  
  return(
<FormCenter>
    <FormFields onSubmit = {signup}>



      <div className="FormField">
      <label htmlFor = "name" className="FormField__Label">Name</label>
      <input 
        id = "name"
        name = "name"
        type = "text"
        placeholder="Enter your full name"
        className="FormField__Input" 
        value={creds.name}
        required onChange = {handleChange}/>
        </div>

      <div className="FormField">
      <label htmlFor = "email" className="FormField__Label">Email</label>
      <input 
        id = "email"
        name = "email"
        type = "email"
        className="FormField__Input" 
        placeholder="Enter your email"
        value = {creds.email}
        required onChange = {handleChange}/>
        </div>

      <div className="FormField">
      <label htmlFor = "password" className="FormField__Label">password</label>
      <input 
        id = "password"
        name = "password"
        type = "text"
        value = {creds.password}
        className="FormField__Input" 
        placeholder="Enter your password"
        required onChange = {handleChange}/>
        </div>
        
       
              <div className="FormField">
                <Link to='/sign-in'>
                  <button className="FormField__Button mr-20">Create an account</button> 
                </Link>
                  <Link to="/sign-in" className="FormField__Link">Sign In</Link>
              </div>
              
      </FormFields>  
</FormCenter>
  );
}

export default Form
