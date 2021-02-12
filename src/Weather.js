import React , { useState } from "react";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState("Lisbon");

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
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
    const apiKey = "58ce3f6986fa88fa9731f046fe82bae3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${"Lisbon"}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  } 

  if(weatherData.ready){
   return ( 
    <div className="Weather">
      <WeatherInfo />  
      <div>
          <br />
          Forecast
          <br />
      </div>
      <div>
          <div className="Header">
            <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter a city"
                autocomplete="off"
                className="enter-city"
                onChange={handleCityChange}
            />
            <input type="submit" value="Search" className="other-city" />
            <button type="button">
            <i className="fas fa-map-marker-alt"></i>
        </button>
      </form>
    </div>
      </div>
    </div>); } else {
        search();
        return "Loading..";
    }
}