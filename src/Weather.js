import React, { useState } from "react";
import WeatherDetails from "./WeatherDetails";
import WeatherTemperature from "./WeatherTemperature";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setweatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setweatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
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
    const apiKey = "bd5b4461863eddaa6ced0a0a67989e0a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <div className="requestCity">
          <form action="#" id="search-form" onSubmit={handleSubmit}>
            <div className="p-2 bg-light rounded rounded-pill shadow-sm mb-4 border border-primary border-1">
              <div className="input-group">
                <input
                  type="search"
                  id="city-input"
                  placeholder="Type a city..."
                  aria-describedby="button-addon1"
                  className="form-control border-0 bg-light"
                  autoComplete="off"
                  autoFocus="on"
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
            <div className="col-md-6 generalWeather ">
              <ul>
                <li>
                  <span className="date">
                    <FormattedDate date={weatherData.date} />
                  </span>
                </li>
                <WeatherTemperature celsius={weatherData.temperature} />
              </ul>
            </div>

            <WeatherDetails data={weatherData} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return <div>Loading...</div>;
  }
}
