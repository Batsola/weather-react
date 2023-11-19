import React, { useState } from "react";
import WeatherDetails from "./WeatherDetails";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";
import WeatherTemperature from "./WeatherTemperature";

export default function Weather(props) {
  const [weatherData, setweatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setweatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.wind.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.main.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "fed392df73b956dce9204cf62bb5cbeb";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="weather-app">
        <div className="searchBar">
          <form action="#" id="search-form" onSubmit={handleSubmit}>
            <div className="p-2 bg-light rounded rounded-pill shadow-sm mb-4 border border-danger border-1">
              <div className="input-group">
                <input
                  type="search"
                  id="city-input"
                  placeholder="Type a city..."
                  aria-describedby="button-addon1"
                  className="form-control border-0 bg-light"
                  autocomplete="off"
                  autofocus="on"
                  onChange={handleCityChange}
                />
                <div className="input-group-append icon">
                  <button
                    id="button-addon1"
                    type="submit"
                    className="btn btn-link text-primary"
                  >
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="container">
          <div className="row">
            <WeatherTemperature />
            <WeatherDetails data={weatherData} />
          </div>
        </div>
        <div className="weather-forecast" id="forecast">
          <WeatherForecast coordinates={weatherData.coordinates} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}