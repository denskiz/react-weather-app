import React, { useState, useEffect } from "react";
// import ReactCSSTransitionGroup from "react-addons-css-transition-group";
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

  const changeCity = (e) => {
    console.log(e);
  };

  return (
    <div id="main-wrapper" className="container">
      <Header backgroundImage={data.backgroundImage} />
      {/* <SearchCityContainer newCity={city} handleChangeCity={changeCity} /> */}
      {data.isLoading ? (
        <Loading />
      ) : (
        <Weather
          currentWeather={data.currentWeather}
          location={data.location}
          localTime={data.localTime}
          forecastWeather={data.forecast}
        />
      )}
      <div className="text-center" id="source-code">
        <a href="https://github.com/denskiz/react-weather-app" target="_blank">
          <button className="btn btn-success">
            Source code on GitHub <i className="fa fa-github"></i>
          </button>
        </a>
      </div>
    </div>
  );
};

export default App;
