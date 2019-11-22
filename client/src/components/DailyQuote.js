import React, { useState, useEffect } from 'react';
import axios from "axios";
import { array } from 'prop-types';
import styled from "styled-components";

const QuoteContainer = styled.div`
  position: fixed;
  bottom: 10px;
  margin-left: 40rem;
`

const QuoteCard = styled.div`
  background: inherit;
  border-radius: 5px;
  width: 600px;
  height: 100px;
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    background: inherit; 
    position: absolute;
    left: -25px;
    right: -25px;
    top: -25px; 
    bottom: -25px;
    box-shadow: inset 0 0 0 3000px rgba(255,255,255,0.3);
    filter: blur(10px);
    }
 `

const Quote = styled.p`
color: darkGrey;
font-weight: bold;
text-align: center;
margin: 2% auto;
width: 500px;

`

const Author = styled.p`
color: grey;
text-align: center;
margin: 0 auto;
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
    <QuoteContainer>
      <QuoteCard>
        <Quote>"{quoteIs}"</Quote>
        <Author>-{authorIs}</Author>
      </QuoteCard>      
    </QuoteContainer>
  );
}

export default DailyQuote;
