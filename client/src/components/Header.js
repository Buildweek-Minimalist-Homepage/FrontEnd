import React from 'react';
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

// const LinkHolders = styled.a`
//     font-size: 30px;
//     text-align: center;
//     text-decoration: none;
//     padding-left: 10px;
//     padding-right: 10px;
//     background: transparent;
//     color: white;
// `

const Header = () => {
    const [darkMode, setDarkMode] = useDarkMode();
    const toggleMode = e => {
      e.preventDefault();
      setDarkMode(!darkMode);
    };


        return (
        <NavBar>
            <nav className='header-nav'>

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