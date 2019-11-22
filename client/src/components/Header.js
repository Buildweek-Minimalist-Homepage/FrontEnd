import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 600px;
    border: 0;
    margin: 0 auto;
`

const LinkHolders = styled.a`
    font-size: 30px;
    line-height: 35px;
    height: 70px;
    text-align: center;
    text-decoration: none;
    padding-left: 10px;
    padding-right: 10px;
    background: transparent;
    color: white;
`

export default class Header extends Component {
    render(){
        return (
        <NavBar>
            <nav className='header-nav'>
                <NavLink to='/homepage' className='header-links'><LinkHolders>Home</LinkHolders></NavLink>
                <NavLink to='/' className='header-links'><LinkHolders>Login</LinkHolders></NavLink>
                <NavLink to='/register' classname='header-links'><LinkHolders>Register</LinkHolders></NavLink>
            </nav>
        </NavBar>
        )
    }
}