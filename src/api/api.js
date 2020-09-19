import axios from "axios";

const BASE_URL = "http://api.weatherstack.com/forecast?access_key=";
const API_KEY = "6fce14c403258da4c3e5928793993d15";

// There are 47 different weather codes.

let cloudyCode = [116, 119, 122];
let rainyCode = [
  176,
  263,
  266,
  293,
  296,
  299,
  302,
  305,
  308,
  311,
  314,
  353,
  356,
  359,
];
let snowyCode = [
  179,
  182,
  185,
  227,
  230,
  281,
  284,
  317,
  320,
  323,
  326,
  329,
  332,
  335,
  338,
  350,
  362,
  365,
  368,
  371,
  374,
  377,
];
let stormyCode = [200, 386, 389, 392, 395];
let mistyCode = [143, 248, 260];
let backgrounds = {
  cloudy: {
    night: "https://i.imgur.com/RKvJT8q.jpg",
    day: "https://i.imgur.com/9BN14fr.jpg",
  },
  raining: {
    night: "https://i.imgur.com/wOig7Nu.jpg",
    day: "https://i.imgur.com/G9Ikmxe.jpg",
  },
  snowing: {
    night: "https://i.imgur.com/WFI2VlZ.jpg",
    day: "https://i.imgur.com/F6kInOS.jpg",
  },
  stormy: {
    night: "https://i.imgur.com/0cuXyGR.jpg",
    day: "https://i.imgur.com/0cuXyGR.jpg",
  },
  clear: {
    night: "https://i.imgur.com/ZuFo52Y.jpg",
    day: "https://i.imgur.com/SI8TbKh.jpg",
  },
  misty: {
    night: "https://i.imgur.com/QRs96Ux.jpg",
    day: "https://i.imgur.com/TTu4wS5.jpg",
  },
};

let api = {
  // default parameter city is undefined if no value or undefined is passed

  getWeather: async function (city = undefined) {
    const { data } = await axios.get(
      `${BASE_URL}${API_KEY}&query=${city === undefined ? "fetch:ip" : city}`
    );
    let timeOfDay = data.current.is_day === "yes" ? "day" : "night";
    let backgroundToUse = api.getBackgroundImage(
      data.current.weather_code,
      timeOfDay
    );
    console.log(data);

    let newState = {
      isLoading: false,
      currentWeather: data.current,
      location: data.location,
      backgroundImage: backgroundToUse,
      forecast: Object.entries(data.forecast)[0][1],
      localTime: data.location.localtime,
    };
    return newState;
  },

  getBackgroundImage: function (conditionCode, timeOfDay) {
    let backgroundToUse;
    if (stormyCode.indexOf(conditionCode) > -1) {
      backgroundToUse = backgrounds["stormy"][timeOfDay];
    } else if (rainyCode.indexOf(conditionCode) > -1) {
      backgroundToUse = backgrounds["raining"][timeOfDay];
    } else if (snowyCode.indexOf(conditionCode) > -1) {
      backgroundToUse = backgrounds["snowing"][timeOfDay];
    } else if (mistyCode.indexOf(conditionCode) > -1) {
      backgroundToUse = backgrounds["misty"][timeOfDay];
    } else if (cloudyCode.indexOf(conditionCode) > -1) {
      backgroundToUse = backgrounds["cloudy"][timeOfDay];
    } else {
      backgroundToUse = backgrounds["clear"][timeOfDay];
    }
    return backgroundToUse;
  },
};

export default api;
