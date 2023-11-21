import React from "react";
import Weather from "./Weather";

import "./App.css";
import WeatherForecast from "./WeatherForecast";

export default function App() {
  return (
    <div className="App">
      <div className="weather-app-container">
        <div className="weather-app">
          <Weather defaultCity={"Tokyo"} />
          <WeatherForecast />
          <footer>
            This project was coded by Amina Batsola and is open-sourced on {""}
            <a
              href="https://github.com/Batsola/weather-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            and hosted on {""}
            <a
              href="https://phenomenal-cucurucho-e39c93.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Netlify.
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}
