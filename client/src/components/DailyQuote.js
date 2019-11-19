import React, { useState, useEffect } from 'react';
import axios from "axios";
import styled from "styled-components";

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
    //filler API from Nasa Apod assignemnt until we can get backend to create gateway work-around for CORS error
    .get('https://api.nasa.gov/planetary/apod?api_key=w420QqAmmrBhoyGgNXdqayiuPuDmQA0iBGIs3nJO')
    .then(response => {
      console.log(response.data.title)
      setQuote(response.data.title)
      // setAuthor(response)
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
