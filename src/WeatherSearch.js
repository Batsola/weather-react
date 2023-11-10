import React from "react";
import "./WeatherSearch.css";

export default function WeatherSearch() {
  return (
    <div className="searchBar">
      <form action="#" id="search-form">
        <div className="p-2 bg-light rounded rounded-pill shadow-sm mb-4 border border-danger border-1">
          <div className="input-group">
            <input
              type="search"
              id="city-input"
              placeholder="Type a city..."
              aria-describedby="button-addon1"
              className="form-control border-0 bg-light"
              autocomplete="off"
            />
            <div className="input-group-append icon">
              <button
                id="button-addon1"
                type="submit"
                className="btn btn-link text-danger"
              >
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
