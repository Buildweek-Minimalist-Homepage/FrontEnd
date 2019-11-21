import React from 'react';

import Header from './Header';
import SearchBar from './SearchBar';
import Todo from './Todo';
import DailyQuote from "./DailyQuote";
import styled from 'styled-components';

const HomeContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const HomePage = () => {
    return (
      <HomeContainer>
        <Header/>
        <SearchBar/>
        <Todo/>
        <DailyQuote/>
      </HomeContainer>
    )
}


export default HomePage;