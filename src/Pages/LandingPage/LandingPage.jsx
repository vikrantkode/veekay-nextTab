import React, { useState } from 'react'
import "./LandingPage.css"

const LandingPage = () => {
    const [userName,setUserName] = useState("");

    const enterNameClickHandler = () =>{
        localStorage.setItem("name", userName);
        window.location.reload()
    }
    
  return (
    <div className='welcome_text'>
        <h1>Hello..!! Can I get your name, please?</h1>
        <input 
            type="text" 
            className='welcome_name_text'
            onChange={(e)=>setUserName(e.target.value)}
            value={userName}
        />
        <div>
            <button 
                className='landing_page_btn'
                onClick={enterNameClickHandler}>Continue
            </button>
        </div>  

    </div>
  )
}

export  {LandingPage}