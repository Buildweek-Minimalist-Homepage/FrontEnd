import React from 'react';

import Header from './Header';
import SearchBar from './SearchBar';
import Todo from './Todo';
import DailyQuote from "./DailyQuote"


const HomePage = () => {


    return (
        <div>
            <Header/>
            <SearchBar/>
            <Todo/>
            <DailyQuote/>
        </div>
    )
}


export default HomePage;