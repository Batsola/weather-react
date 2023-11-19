import React, { useState } from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  
    return (
      <div className="App">
        <div className="weather-app-container">
          <Weather defaultCity="Tokyo"/>
          <footer>
            This project was coded by Amina Batsola and is{" "}
            <a href="https://github.com/Batsola/weather-react" target="_blank">
              open-sourced on Github
            </a>
          </footer>
        </div>
      </div>
    );
 
}
