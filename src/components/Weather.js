import React from "react";
import "./Weather.css";

const Weather = ({ currentWeather, forecastWeather, location, localTime }) => {
  let deg = "\u00B0";

  return (
    <div>
      <div className="text-center">
        <h3>{`Showing weather for ${location.name}, ${location.region}`}</h3>
      </div>
      <div id="temperature" className="text-center">
        <span id="temp-text">
          <img src={`${currentWeather.weather_icons[0]}`} alt="weather" />
          {` ${currentWeather.temperature}C`}
        </span>
      </div>
      <div id="time" className="text-center">
        {`Local time: ${localTime}`}
      </div>

      <div id="details">
        <div className="row">
          <div className="col-xs-4 col-sm-4">
            <div className="detail-box">
              {currentWeather.weather_descriptions[0]}
            </div>
          </div>
          <div className="col-xs-4 col-sm-4">
            <div className="detail-box">
              {`Cloudiness: ${currentWeather.cloudcover}%`}
            </div>
          </div>
          <div className="col-xs-4 col-sm-4">
            <div className="detail-box">{`Min temp: ${forecastWeather.mintemp}${deg}C`}</div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-4 col-sm-4">
            <div className="detail-box">
              {`Max temp: ${forecastWeather.maxtemp}${deg}C`}
            </div>
          </div>
          <div className="col-xs-4 col-sm-4">
            <div className="detail-box">
              {`Wind: ${currentWeather.wind_speed}kph`}
            </div>
          </div>
          <div className="col-xs-4 col-sm-4">
            <div className="detail-box">
              {`Humidity: ${currentWeather.humidity}%`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
