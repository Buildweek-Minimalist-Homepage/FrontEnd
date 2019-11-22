import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import {axiosWithAuth} from '../utils/useAxiosAuth';
import styled from 'styled-components'

const FormCenter = styled.div`
  margin-bottom: 100px;
  display:flex;
  justify-content:center
`
const FormTitle = styled.div`
  color: grey;
  font-weight: 300;
  margin-bottom: 50px;
  background:blue;
`
const FormFields = styled.div`
  margin-top: 40px;
`
const Wraping = styled.div`
  background-color: rgba(18, 18, 18, 0.66);
`



const Form = ({history}) => {

  const [creds, setCreds] = useState({ name: '', email: '', password: ''});

  const handleChange = e => {
    setCreds({...creds, [e.target.name]: e.target.value});
  }

  const signup = e => {
    e.preventDefault();
        if(creds.name.length ===0 || creds.email.length === 0|| creds.password.length ===0){
            alert("Youre missing something there")
        }

    console.log(creds);
    axiosWithAuth().post('/auth/register', creds)
      .then(res => {
        console.log(res.data);
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
  

  return(
    <FormCenter>
      <FormFields>
        <Wraping>
          <form onSubmit = {signup} className="FormFields">
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
                type = "password"
                value = {creds.password}
                className="FormField__Input" 
                placeholder="Enter your password"
                required onChange = {handleChange}/>
            </div>

           


              
            <div className="FormField">
              <Link to='/'>
                <button className="FormField__Button mr-20">Create an account</button> 
              </Link>
              <Link to="/" className="FormField__Link">Sign In</Link>
            </div>
          </form>
        </Wraping>
      </FormFields>  
    </FormCenter>
  );
}

export default Form;
