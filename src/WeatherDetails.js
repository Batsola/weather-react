import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherDetails.css";

export default function WeatherDetails(props) {
  return (
    <div className="col-md-6 weatherInfo">
      <div className="row">
        <div className="col">
          <WeatherIcon code={props.data.icon} size={50} />
        </div>
      </div>
      <h1>{props.data.city}</h1>
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
  );
}
