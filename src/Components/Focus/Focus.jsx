import React, { useEffect, useState } from "react";
import "./Focus.css";

const Focus = () => {
  const [focus, setFocus] = useState("");
  const [userFocus, setUserFocus] = useState("");

  const enterClickHandler = (e) => {
    if (e.key === "Enter") {
      localStorage.setItem("focusByUser", focus);
      setUserFocus(focus);
    }
  };

  const editFocusHandler = () => {
    localStorage.clear("focusByUser");
    setUserFocus("")
  };


  useEffect(()=>{
    if(localStorage.getItem("focusByUser")){
      setUserFocus(localStorage.getItem("focusByUser"))
    }
  },[])
  return (
    <div>
      <div>
        <h1 className="focus_heading">What is your main focus for today ?</h1>
      </div>
      {!userFocus && (
        <input
          type="text"
          className="focus_text_input"
          onChange={(e) => setFocus(e.target.value)}
          value={focus}
          onKeyDown={enterClickHandler}
        />
      )}

      {userFocus && (
        <label className="focus_display"> My Today's main focus is {userFocus} <span className="material-symbols-outlined edit_icon"
        onClick={editFocusHandler}>edit</span>
        </label>
      )}
    </div>
  );
};

export { Focus };
