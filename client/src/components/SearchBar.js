import React, {useReducer, useRef} from 'react';
import {reducer, initialState} from '../reducers/reducer';


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
            <div>
                <form action='https://www.google.com/search' class='searchForm' method='get' name='searchform' target=''>
                    <input name='sitesearch' type='hidden' value=''/>
                    <input autoComplete='on' className='form-control search' name='q' placeholder='Search' required='required' type='text'/>
                    <button className='search-button' type='submit'>Search</button>
                </form>
            </div>
        )
    }
}