import React, { useState, useEffect } from 'react';
import axios from "axios";
import styled from "styled-components";
import { array } from 'prop-types';

const Container1 = styled.div`
textAlign: "center";

`
const QuoteCard = styled.h2`
color: "#3AAFA9";
`

const DailyQuote = () => {

  const [quoteIs, setQuote] = useState('');

  const [authorIs, setAuthor] = useState('Some Guy');

  // "Access-Control-Request-Headers": "Authorization",
  // "Access-Control-Allow-Headers": "Authorization",
  // "Access-Control-Allow-Origin": "http://localhost:3001",

  // .get('https://api.paperquotes.com/apiv1/qod/', {
  //   "Access-Control-Allow-Headers": "Authorization",
  //   "Access-Control-Allow-Origin": "http://localhost:3001",
  //   "headers": {
  //     "Authorization": "Token fdefb43787380c16f601497a3671c8198bc19cb5"
  //   } 
  // })
  
  useEffect(()=> {
    
    
    axios
    .get('https://minimalist-homepage.herokuapp.com/api/quote')
    .then(response => {
      console.log(response.data.results)
      // let quotesArr = response.data.results;
      // const randomQuote = () => 
      //   quotesArr[Math.floor(Math.random() * quotesArr.length)];
      // setQuote(randomQuote())
    })
    .catch(error => {
      console.log(error, 'we could not find the quote of the day')
    })

  }, [quoteIs])

  return(
    <Container1>
      <QuoteCard>
      "{quoteIs}"
      </QuoteCard>
      <h3>-{authorIs}</h3>
    </Container1>
  );
}

export default DailyQuote;
