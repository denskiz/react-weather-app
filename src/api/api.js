import axios from "axios";

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?";
const API_KEY = "f904f314bb36070d99d69fd1df14fa8f";

function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    });
  });
}

function Unix_timestamp(t) {
  var dt = new Date(t * 1000);
  var hr = dt.getHours();
  var m = "0" + dt.getMinutes();
  var s = "0" + dt.getSeconds();
  return hr + ":" + m.substr(-2) + ":" + s.substr(-2);
}


// https://openweathermap.org/weather-conditions
function getBackgroundImage(conditionCode) {
  let backgroundToUse;
  // Thunderstorm
  if (conditionCode < 233) {
    backgroundToUse = "https://i.imgur.com/D0S3rsW.jpg";
    // drizzle weather
  } else if (conditionCode > 299 && conditionCode < 330) {
    backgroundToUse = "https://i.imgur.com/48J1B7y.jpg";
    // rain
  } else if (conditionCode > 499 && conditionCode < 532) {
    backgroundToUse = "https://i.imgur.com/Wg1xtgH.jpg";
    // Snow
  } else if (conditionCode > 599 && conditionCode < 623) {
    backgroundToUse = "https://i.imgur.com/F6kInOS.jpg";
  } else if (conditionCode > 700 && conditionCode < 782) {
    backgroundToUse = "https://imgur.com/lmQb9Vw";
  } else if (conditionCode === 800) {
    backgroundToUse = "https://i.imgur.com/SI8TbKh.jpg";
  } else {
    backgroundToUse = "https://i.imgur.com/9BN14fr.jpg";
  }
  return backgroundToUse;
}

let api = {
  // Search using city Name

  getWeather: async function (city) {
    if (city) {
      const { data } = await axios.get(
        `${BASE_URL}q=${city}&appid=${API_KEY}&units=metric`
      );
    } else {
      const coordinates = await getCurrentLocation();
      const { latitude, longitude } = coordinates.coords;
      const { data } = await axios.get(
        `${BASE_URL}lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );
      const sunrise = Unix_timestamp(data.sys.sunrise);
      const sunset = Unix_timestamp(data.sys.sunset);

      
      let newState = {
        temp: data.main.temp,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        isLoading: false,
        weather: data.weather[0].description,
        cityName: data.name,
        windSpeed: data.wind.speed,
        sunrise,
        sunset,
        cloudiness: data.clouds.all,
        backgroundImage: getBackgroundImage(data.weather[0].id),
        humidity: data.main.humidity,
      };
      console.log(data.weather[0].id)

      return newState;
    }
  },
};

export default api;
