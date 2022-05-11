import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios"
import {LandingPage,Homepage} from "./Pages/Pages"

function App() {
  const [backgroundImage,setBackbackgroundImage] = useState("");
  const nameOfuser = localStorage.getItem("name");

  useEffect(()=>{
    try{
      (async()=>{
        const resp = await axios.get(`https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_API_KEY}&query=nature&orientation=landscape`)
        setBackbackgroundImage(resp.data.urls.regular);
      })()
    }catch(err){
      console.log(err)
    }  
  },[])
  
  return (
    <div className="App">
      <img 
        className="background_image" 
        src={backgroundImage}
        alt="backgroundImage"
      />
     {nameOfuser ? <Homepage/> : <LandingPage/> }
    </div>
  );
}

export default App;
