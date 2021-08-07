import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Loading from "./components/Loading";
import Weather from "./components/Weather";
import api from "./api/api";
import "./App.css";

const App = () => {
  const [data, setData] = useState({
    isLoading: true,
    newCity: "",
    backgroundImage: undefined,
  });

  useEffect(() => {
    let data = api.getWeather().then((newState) => {
      setData(newState);
    });
  }, []);

  return (
    <div id="main-wrapper" className="container">
      <Header backgroundImage={data.backgroundImage} />

      {data.isLoading ? (
        <Loading />
      ) : (
        <Weather
          weather={data.weather}
          cityName={data.cityName}
          temp={data.temp}
          minTemp={data.tempMin}
          maxTemp={data.tempMax}
          sunrise={data.sunrise}
          sunset={data.sunset}
          cloudiness={data.cloudiness}
          forecastWeather={data.forecast}
          windSpeed={data.windSpeed}
          humidity={data.humidity}
        />
      )}
      <div className="text-center" id="source-code">
        <a href="https://github.com/denskiz/react-weather-app" target="_blank">
          <button className="btn btn-success">Source code on GitHub</button>
        </a>
      </div>
    </div>
  );
};

export default App;
