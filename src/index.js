import React from "react";
import ReactDOM from "react-dom";
import WeatherSearch from "./WeatherSearch";
import GeneralWeather from "./GeneralWeather";
import WeatherDetails from "./WeatherDetails";
import WeatherForecast from "./WeatherForecast";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="weather-app-wrapper">
        <div class="weather-app">
          <WeatherSearch />

          <div class="container">
            <div class="row">
              <GeneralWeather />
              <WeatherDetails />
            </div>
          </div>
          <div class="weather-forecast" id="forecast">
            <WeatherForecast />
          </div>
        </div>
        <h6>
          <a
            href="https://github.com/Batsola/weather-react"
            class="link-warning"
          >
            Open-source code
          </a>
          by Amina Batsola
        </h6>
      </div>
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
