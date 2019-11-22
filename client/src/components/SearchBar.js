import React, {useReducer, useRef} from 'react';
import {reducer, initialState} from '../reducers/reducer';
import styled from "styled-components";

const SearchContainer = styled.div`
    position: fixed;
    top: 10px;
    left: 50px;
    padding-top: 2rem;
`

const SearchButton = styled.button`
    display: inline-block;
    border-radius: 3px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 7rem;
    background: transparent;
    color: white;
    border: 2px solid white;
`

const SearchInput = styled.input`
    border: 0;
    border-bottom: 2px solid white;
    width: 50%;
    font-size: 30px;
    line-height: 35px;
    height: 5vh;
    text-align: center;
    padding: 10px;
    background: transparent;
    color: black;

`

export const SearchBar = () => {
    // const [state, dispatch] = useReducer()
    // const inputRef = useRef();

    // const handleSubmit = e => {
    //     e.preventDefault()
    //     dispatch({type: 'ADD', name: inputRef.current.value});
    //     inputRef.current.value = '';
    // };

    // const changeHandler = event => {
        
    // }

    
    {
        return(
            <SearchContainer>
                <form action='https://www.google.com/search' className='searchForm' method='get' name='searchform' target=''>
                    <input name='sitesearch' type='hidden' value=''/>
                    <SearchInput autoComplete='on' className='form-control search' name='q' placeholder='Search' required='required' type='text'/>
                    <SearchButton className='search-button' type='submit'>Search</SearchButton>
                </form>
            </SearchContainer>
        )
    }
}

export default SearchBar;