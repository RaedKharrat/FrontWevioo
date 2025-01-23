import React from "react";
import "../Css/LoadingDesign.css";
import logowevioopng from "./logowevioopng.png";

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <img 
        src={logowevioopng}
        alt="Logo"
        className="loading-logo spinning"
      />
      <div className="spinner">

      </div>
      <p style={{color:'white'}}>Loading, please wait...</p>
    </div>
  );
};

export default LoadingScreen;
