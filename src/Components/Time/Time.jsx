import React, { useEffect, useState } from "react";
import "./Time.css"

const Time = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    let timeStamp = setInterval(() => {
      var date = new Date();
      var currentTime = date.toLocaleTimeString("en-GB");
      setTime(currentTime);
    }, 1000);
    return () => clearInterval(timeStamp);
  }, []);

  const greetUser = `Good ${
    (time.slice(0, 2) >=4   && time.slice(0, 2) < 12 && "Morning") ||
    (time.slice(0, 2) >=12 && time.slice(0, 2) < 17 && "Afternoon") ||
    (time.slice(0, 2) >=17 && "Evening") ||
    ("Night")
  }`;

  const currentUser = localStorage.getItem("name")

  return (
    <>
      <div className="current_time_container">
        <h1 className="current_time_heading">{time.slice(0, 5)}</h1>
      </div>
      <div >
        <h1 className="greet_user_container">{greetUser}, {currentUser} !!</h1>
      </div>
    </>
  );
};

export { Time };
