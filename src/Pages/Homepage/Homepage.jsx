import React from 'react'
import "./Homepage.css"
import { Focus } from '../../Components/Focus/Focus'
import { Time } from '../../Components/Time/Time'
import { Quotes } from '../../Components/Quotes/Quotes'
import { Weather } from '../../Components/Weather/Weather'

const Homepage = () => {

  return (
    <div className='container'>
        <Weather/>
        <div className="time_container">
          <Time/>
        </div>
        <div className="focus_container">
          <Focus/>
        </div>
        <div className="quotes_container">
          <Quotes/>
        </div>
        
    </div>
  )
}

export {Homepage}