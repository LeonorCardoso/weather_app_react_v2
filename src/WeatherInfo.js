import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <div className="row justify-content-center">
                <div className="col-6">
                    <h3 className="weather-description">{props.data.description}</h3>
                    <span className="weather-icon"><WeatherIcon code={props.data.icon} /></span>
                    <span className="temperature-number">
                        {Math.round(props.data.temperature)}
                    </span>
                    {" "}
                    <span className="units">
                        <a href="/" className="celsius">°C</a>
                        <span>|</span>
                        <a href="/" className="fahrenheit">°F</a>
                    </span> 
                </div>
                <div className="col-6">
                    <ul className="side-information">
                        <li>Humidity:{props.data.humidity}%</li>
                        <li>Wind:{props.data.wind}km/h</li>
                    </ul>
                </div>
            </div>
            <br />
            <ul className="city-date">
                <li><h3>{props.data.city}</h3></li>
                <li><FormattedDate date={props.data.date} /></li>
            </ul>
        </div>
      );

}