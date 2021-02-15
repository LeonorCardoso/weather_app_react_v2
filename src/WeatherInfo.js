import React from "react";
import FormattedDate from "./FormattedDate";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-6">
                    <h3>{props.data.description}</h3>
                    <span className="temperature-number">
                        {props.data.temperature}
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
            <br />
            <ul>
                <li><h3>{props.data.city}</h3></li>
                <li><FormattedDate date={props.data.date} /></li>
            </ul>
        </div>
      );

}