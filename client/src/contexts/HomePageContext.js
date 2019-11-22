import React, {useState, createContext} from 'react';

export const HomePageContext = createContext();

export const HomePageProvider = props => {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token') ? true: false);
    const [homePage, setHomePage] = useState([]);

    return (
        <HomePageContext.Provider value={{homePage, setHomePage, isLoggedIn, setIsLoggedIn}}>
            {props.children}
        </HomePageContext.Provider>
    )
}

export default HomePageContext;