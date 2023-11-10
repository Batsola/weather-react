import React from "react";
import "./GeneralWeather.css";

export default function GeneralWeather() {
  return (
    <div className="col-md-6 general">
      <ul className="Info">
        <li>
          <span id="date">Thursday 16:45</span>
        </li>
        <li>
          <span id="temperature">30</span>
          <span className="units">°C </span>
        </li>
      </ul>
    </div>
  );
}
