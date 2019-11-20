import React from 'react';

import Header from './Header';
import SearchBar from './SearchBar';
import Todo from './Todo';


const HomePage = () => {


    return (
        <div>
            <Header/>
            <SearchBar/>
            <Todo/>
        </div>
    )
}


export default HomePage;