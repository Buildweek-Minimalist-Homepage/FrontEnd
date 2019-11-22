import React from 'react';

import Header from './Header';
import SearchBar from './SearchBar';
import Todo from './Todo';
import DailyQuote from "./DailyQuote";
import WeatherApp from './WeatherApp';

import {Clock} from './Time';
import styled from "styled-components";


const SearchBarWrap = styled.div`display: block;
margin-top: 5%;
margin-left:1%`
const ClockWrap = styled.div`display: block;
margin-top: 5%;
margin-left:1%`


const HomePage = () => {
 

     
    return (
        <div>
            <div>
                <SearchBarWrap>
                    <SearchBar/>
                </SearchBarWrap>
                <Header/>
                <WeatherApp/>
            </div>

            <div>
                <Clock/>
            </div>
            
            <div>
                <Todo/>
                <DailyQuote/>
            </div>
        </div>
    )
}



export default HomePage;