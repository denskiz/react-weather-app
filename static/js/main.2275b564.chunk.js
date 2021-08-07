(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{21:function(e,t,c){},22:function(e,t,c){},24:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),i=c(14),s=c.n(i),r=(c(21),c(16)),d=(c(22),c(0)),o=function(e){var t=e.backgroundImage,c={backgroundImage:"url('".concat(t,"')")};return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{id:"background",style:void 0===t?null:c},t),Object(d.jsx)("div",{id:"title-text",className:"text-center",children:"Local Weather App"})]})};var m=function(){return Object(d.jsx)("div",{className:"loading",children:Object(d.jsxs)("h1",{children:["Loading ",Object(d.jsx)("i",{className:"fa fa-spinner fa-spin fa-1x da-fw"})]})})},l=(c(24),function(e){var t=e.weather,c=e.cityName,n=(e.location,e.temp),a=(e.forecastWeather,e.cloudiness),i=e.minTemp,s=e.maxTemp,r=e.windSpeed,o=e.humidity;return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"text-center",children:Object(d.jsx)("h3",{children:"Showing weather for ".concat(c)})}),Object(d.jsx)("div",{id:"temperature",className:"text-center",children:Object(d.jsx)("span",{id:"temp-text",children:" ".concat(Math.round(n)).concat("\xb0","C")})}),Object(d.jsxs)("div",{id:"details",children:[Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-xs-4 col-sm-4",children:Object(d.jsx)("div",{className:"detail-box",children:t})}),Object(d.jsx)("div",{className:"col-xs-4 col-sm-4",children:Object(d.jsx)("div",{className:"detail-box",children:"Cloudiness: ".concat(a,"%")})}),Object(d.jsx)("div",{className:"col-xs-4 col-sm-4",children:Object(d.jsx)("div",{className:"detail-box",children:"Min temp: ".concat(i).concat("\xb0","C")})})]}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-xs-4 col-sm-4",children:Object(d.jsx)("div",{className:"detail-box",children:"Max temp: ".concat(s).concat("\xb0","C")})}),Object(d.jsx)("div",{className:"col-xs-4 col-sm-4",children:Object(d.jsx)("div",{className:"detail-box",children:"Wind: ".concat(r,"kph")})}),Object(d.jsx)("div",{className:"col-xs-4 col-sm-4",children:Object(d.jsx)("div",{className:"detail-box",children:"Humidity: ".concat(o,"%")})})]})]})]})}),u=c(4),j=c.n(u),h=c(15),b=c(5),p=c.n(b),x="https://api.openweathermap.org/data/2.5/weather?",g="f904f314bb36070d99d69fd1df14fa8f";function f(e){var t=new Date(1e3*e),c=t.getHours(),n="0"+t.getMinutes(),a="0"+t.getSeconds();return c+":"+n.substr(-2)+":"+a.substr(-2)}var O={getWeather:function(){var e=Object(h.a)(j.a.mark((function e(t){var c,n,a,i,s,r,d,o,m,l;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=7;break}return e.next=3,p.a.get("".concat(x,"q=").concat(t,"&appid=").concat(g,"&units=metric"));case 3:c=e.sent,c.data,e.next=20;break;case 7:return e.next=9,new Promise((function(e,t){navigator.geolocation.getCurrentPosition(e,t,{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})}));case 9:return n=e.sent,a=n.coords,i=a.latitude,s=a.longitude,e.next=13,p.a.get("".concat(x,"lat=").concat(i,"&lon=").concat(s,"&appid=").concat(g,"&units=metric"));case 13:return r=e.sent,d=r.data,o=f(d.sys.sunrise),m=f(d.sys.sunset),l={temp:d.main.temp,tempMin:d.main.temp_min,tempMax:d.main.temp_max,isLoading:!1,weather:d.weather[0].description,cityName:d.name,windSpeed:d.wind.speed,sunrise:o,sunset:m,cloudiness:d.clouds.all,backgroundImage:(u=d.weather[0].id,u<233?"https://i.imgur.com/D0S3rsW.jpg":u>299&&u<330?"https://i.imgur.com/48J1B7y.jpg":u>499&&u<532?"https://i.imgur.com/Wg1xtgH.jpg":u>599&&u<623?"https://i.imgur.com/F6kInOS.jpg":u>700&&u<782?"https://imgur.com/lmQb9Vw":800===u?"https://i.imgur.com/SI8TbKh.jpg":"https://i.imgur.com/9BN14fr.jpg"),humidity:d.main.humidity},console.log(d.weather[0].id),e.abrupt("return",l);case 20:case"end":return e.stop()}var u}),e)})));return function(t){return e.apply(this,arguments)}}()},v=(c(44),function(){var e=Object(n.useState)({isLoading:!0,newCity:"",backgroundImage:void 0}),t=Object(r.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){O.getWeather().then((function(e){a(e)}))}),[]),Object(d.jsxs)("div",{id:"main-wrapper",className:"container",children:[Object(d.jsx)(o,{backgroundImage:c.backgroundImage}),c.isLoading?Object(d.jsx)(m,{}):Object(d.jsx)(l,{weather:c.weather,cityName:c.cityName,temp:c.temp,minTemp:c.tempMin,maxTemp:c.tempMax,sunrise:c.sunrise,sunset:c.sunset,cloudiness:c.cloudiness,forecastWeather:c.forecast,windSpeed:c.windSpeed,humidity:c.humidity}),Object(d.jsx)("div",{className:"text-center",id:"source-code",children:Object(d.jsx)("a",{href:"https://github.com/denskiz/react-weather-app",target:"_blank",children:Object(d.jsx)("button",{className:"btn btn-success",children:"Source code on GitHub"})})})]})}),w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,46)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),i(e),s(e)}))};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root")),w()}},[[45,1,2]]]);
//# sourceMappingURL=main.2275b564.chunk.js.map