import React from 'react';

import Header from './Header';
import SearchBar from './SearchBar';
import Todo from './Todo';
import {Clock} from './Time';

const HomePage = () => {


    return (
        <div>
            <Header/>
            <SearchBar/>
            <Clock/>
            <Todo/>
        </div>
    )
}


export default HomePage;