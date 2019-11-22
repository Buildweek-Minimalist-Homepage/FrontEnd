import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import useDarkMode from './hooks/useDarkMode';


const NavBar = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 600px;
    border: 0;
    margin: 0 auto;
    margin-left: 40rem;
    padding-top: 2rem;
`

const LinkHolders = styled.a`
    font-size: 30px;
    text-align: center;
    text-decoration: none;
    padding-left: 10px;
    padding-right: 10px;
    background: transparent;
    color: white;
`

const Header = () => {
    const [darkMode, setDarkMode] = useDarkMode();
    const toggleMode = e => {
      e.preventDefault();
      setDarkMode(!darkMode);
    };


        return (
        <NavBar>
            <nav className='header-nav'>
                {/* <NavLink to='/homepage' className='header-links'><LinkHolders>Home</LinkHolders></NavLink>
                <NavLink to='/' className='header-links'><LinkHolders>Login</LinkHolders></NavLink>
                <NavLink to='/register' classname='header-links'><LinkHolders>Register</LinkHolders></NavLink> */}
            <div className="dark-mode__toggle">
                <div
                    onClick={toggleMode}
                    className={darkMode ? 'toggle toggled' : 'toggle'}
                />
            </div>
            </nav>
        </NavBar>
        )

}

export default Header