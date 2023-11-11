
import React from "react";

import WeatherSearch from "./WeatherSearch";
import GeneralWeather from "./GeneralWeather";
import WeatherDetails from "./WeatherDetails";
import WeatherForecast from "./WeatherForecast";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="weather-app-container">
        <div className="weather-app">
          <WeatherSearch />

          <div className="container">
            <div className="row">
              <GeneralWeather />
              <WeatherDetails />
            </div>
          </div>
          <div className="weather-forecast" id="forecast">
            <WeatherForecast />
          </div>
        </div>
        <h6>
          <a href="https://github.com/Batsola/weather-react" target="_blank">
            Open-source code{" "}
          </a>
          by Amina Batsola
        </h6>
      </div>
    </div>
  );
}

