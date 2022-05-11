import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./Weather.css"

const Weather = () => {
    const [lat, setLat] = useState(0);
    const [long, setLong] = useState(0);
    const [weatherData,setWeatherData] = useState(0);

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((pos)=>{
            setLat(pos.coords.latitude);
            setLong(pos.coords.longitude);
        })
        console.log(lat)
        console.log(long)
    },[lat,long])

    useEffect(()=>{
      console.log("key hai ", process.env.REACT_APP_WEATHER_API_KEY);
      const apiUrl = process.env.REACT_APP_WEATHER_API_KEY.toString().slice(0,-1)
      try{
        (async ()=>{
          const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiUrl}`)
          
          console.log(resp)
          setWeatherData(resp.data)
        })()
      }catch(err){
        console.log(err)
      } 
    },[lat,long])
  return (
    <div className='weather_container'>
        <h3>{(weatherData.main?.temp  -273.15).toFixed(2)}°C</h3>
        <h3>{weatherData?.name}</h3>
    </div>
  )
}

export  {Weather}