import React, { useState, useEffect } from 'react';
import axios from "axios";
import styled from "styled-components";
// import { array } from 'prop-types';

const Container1 = styled.div`
textAlign: "center";

`
const QuoteCard = styled.h2`
color: "grey";
`

const DailyQuote = () => {

  const [quoteIs, setQuote] = useState('');

  const [authorIs, setAuthor] = useState('Some Guy');

  
  useEffect(()=> {
    
    
    axios
    .get('https://minimalist-homepage.herokuapp.com/api/quote')
    .then(response => {
      console.log(response.data)
      setQuote(response.data.content)
      setAuthor(response.data.author)
      })
    
    .catch(error => {
      console.log(error, 'we could not find the quote of the day')
    })

  }, [])

  return(
    <div>
      <QuoteCard>"{quoteIs}"</QuoteCard>
      <p>-{authorIs}</p>
    </div>      
  );
}

export default DailyQuote;
