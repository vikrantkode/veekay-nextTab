import React, { useState, useEffect } from 'react'
import "./Quotes.css"
import axios from "axios"

const Quotes = () => {
    const [quotes,setQuotes] = useState("");
    useEffect(()=>{
       ( async ()=>{
            const resp = await axios.get(`https://type.fit/api/quotes`)
            const randomQuotes = Math.floor(Math.random()*100) 
            setQuotes(resp.data[randomQuotes])
        })()
    },[])
  return (
    <div>   
        <h3 className='quotes'>"{quotes.text}"</h3>
    </div>
  )
}

export  {Quotes}