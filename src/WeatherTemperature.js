import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <div className="col-md-6 generalWeather ">
        <ul>
          <li>
            <span className="date">
              <FormattedDate date={props.data.date} />
            </span>
          </li>
          <li>
            <span className="temperature">{Math.round(props.celsius)}</span>
            <span className="units">
              °C | {""}
              <button href="#" onClick={showFahrenheit}>
                F{" "}
              </button>
              |
            </span>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="col-md-6 generalWeather ">
        <ul>
          <li>
            <span className="date">
              <FormattedDate date={props.data.date} />
            </span>
          </li>
          <li>
            <span className="temperature">{Math.round(fahrenheit())}</span>
            <span className="units">
              <button href="#" onClick={showCelsius}>
                °C
              </button>
              | F
            </span>
          </li>
        </ul>
      </div>
    );
  }
}
