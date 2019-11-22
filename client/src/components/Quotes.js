import axios from 'axios';
import React, {useEffect, useState} from 'react';

const QuotesWidget = () =>{

    const [quoteInfo, setQuoteInfo] = useState (null)

    useEffect(() =>{
        axios.get ('https://andruxnet-random-famous-quotes.p.rapidapi.com/07a2b60784msh0649991a4fe8200p1f0c1fjsn123ea2bb58f2')
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            console.log('no data returned', error)
        })
    }, [])

    return (
        <div>
            
        </div>
    )
}
export default QuotesWidget