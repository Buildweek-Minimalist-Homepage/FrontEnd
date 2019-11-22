import React from 'react';

import Header from './Header';
import SearchBar from './SearchBar';
import Todo from './Todo';
import DailyQuote from "./DailyQuote";
import WeatherApp from './WeatherApp';

import {Clock} from './Time';
import styled from "styled-components";

const TopWidgetBar = styled.div`
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`
const SearchBarWrap = styled.div`display: block;
    margin-top: 5%;
    margin-left:1%;
`

const ClockWrap = styled.div`display: block;
    margin-top: 5%;
    margin-left:1%;
`


const HomePage = () => {
 

     
    return (
        <div>
            <TopWidgetBar>
                <SearchBarWrap>
                    <SearchBar/>
                </SearchBarWrap>
                <Header/>
                <WeatherApp/>
            </TopWidgetBar>

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