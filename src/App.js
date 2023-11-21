import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="weather-app-container">
        <div className="weather-app">
          <Weather defaultCity={"Tokyo"} />
          <footer>
            This project was coded by Amina Batsola and is{" "}
            <a
              href="https://github.com/Batsola/weather-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-sourced on Github hosted on Netlify.
            </a>
            and{" "}
            <a
              href="https://phenomenal-cucurucho-e39c93.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              hosted on Netlify.
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}
