import React from "react";
 import FormattedDate from "./FormattedDate";
 import "./WeatherTemperature.css";

export default function WeatherTemperature(props){
  return (
  <div className="col-md-6 generalWeather ">
    <ul>
      <li>
        <span className="date"><FormattedDate date={props.data.date}/></span>
      </li>
      <li>
        <span className="temperature">{Math.round(weatherData.temperature)}</span>
        <span className="units">°C </span>
      </li>
    </ul>
  </div>);
}
