import React from "react";
import "./Weather.css";

const Weather = ({
  weather,
  cityName,
  location,
  temp,
  forecastWeather,
  cloudiness,
  minTemp,
  maxTemp,
  windSpeed,
  humidity,
}) => {
  let deg = "\u00B0";

  return (
    <div>
      <div className="text-center">
        <h3>{`Showing weather for ${cityName}`}</h3>
      </div>
      <div id="temperature" className="text-center">
        <span id="temp-text">{` ${Math.round(temp)}${deg}C`}</span>
      </div>

      <div id="details">
        <div className="row">
          <div className="col-xs-4 col-sm-4">
            <div className="detail-box">{weather}</div>
          </div>
          <div className="col-xs-4 col-sm-4">
            <div className="detail-box">{`Cloudiness: ${cloudiness}%`}</div>
          </div>
          <div className="col-xs-4 col-sm-4">
            <div className="detail-box">{`Min temp: ${minTemp}${deg}C`}</div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-4 col-sm-4">
            <div className="detail-box">{`Max temp: ${maxTemp}${deg}C`}</div>
          </div>
          <div className="col-xs-4 col-sm-4">
            <div className="detail-box">{`Wind: ${windSpeed}kph`}</div>
          </div>
          <div className="col-xs-4 col-sm-4">
            <div className="detail-box">{`Humidity: ${humidity}%`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
