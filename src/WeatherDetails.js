import React from "react";

import "./WeatherDetails.css";

export default function WeatherDetails(props) {
  return (
    <div className="col-md-6 weatherInfo">
      <div className="row">
        <div className="col-md-6">
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            id="icon"
            className="img"
          />
        </div>
        <div className="col-md-6 properties">
          <div>
            Humidity: <span id="humidity">{props.data.humidity}</span>%
          </div>
          <div>
            Wind: <span id="wind"></span>
            {props.data.wind}km/h
          </div>
          <div id="description" className="text-capitalize">
            {props.data.description}
          </div>
        </div>
      </div>

      <h1 id="city">{props.data.city}</h1>
      <h2 className="month">12 October</h2>
    </div>
  );
}
