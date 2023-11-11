import React from "react";
import "./WeatherDetails.css";

export default function WeatherDetails() {
  return (
    <div className="col-md-6 currentWeather">
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://openweathermap.org/img/wn/04d@2x.png"
            alt=""
            id="icon"
          />
        </div>
        <div className="col-md-6 properties">
          <div>
            Humidity: <span id="humidity">30</span>%
          </div>
          <div>
            Wind: <span id="wind"></span>2km/h
          </div>
          <div id="description"> Broken Clouds</div>
        </div>
      </div>

      <h1 id="city">New York</h1>
      <h2 id="month">12 October</h2>
    </div>
  );
}
