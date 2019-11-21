import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

export default class Header extends Component {
    render(){
        return (
        <div>
            <nav className='header-nav'>
                <NavLink to='/homepage' className='header-links'>Home</NavLink>
                <NavLink to='/sign-in' className='header-links'>Login</NavLink>
                <NavLink to='/register' classname='header-links'>Register</NavLink>
            </nav>
        </div>
        )
    }
}