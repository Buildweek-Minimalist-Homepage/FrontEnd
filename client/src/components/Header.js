import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render(){;

        return (
        <div>
            <nav className='header-nav'>
                <NavLink to='/' className='header-links'>Home</NavLink>
                <NavLink to='/login' className='header-links'>Login</NavLink>
            </nav>
        </div>
        )
    }
}