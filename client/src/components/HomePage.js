import React from 'react';

import Header from './Header';
import SearchBar from './SearchBar';
import Todo from './Todo';
import DailyQuote from "./DailyQuote"

import {Clock} from './Time';
const HomePage = () => {


    return (
        <div>
            <Header/>
            <SearchBar/>
            <Clock/>
            <Todo/>
            <DailyQuote/>
        </div>
    )
}


export default HomePage;