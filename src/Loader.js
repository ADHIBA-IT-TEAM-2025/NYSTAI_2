
import React from 'react';
import './App.css'; 
import loaderGif from "../src/NYSTAI-WEBSITE/IMAGES-VIDEOS/logogif.gif"

const Preloader = () => (
  <div className="loader-container">
    <img src={loaderGif} alt="Loading..." />
  </div>
);

export default Preloader;
