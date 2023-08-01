/** @format */
function formatDate(timestamp) {
  let date = new Date(timestamp);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednay",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  let hours = date.getHours();
  if (hours < 0) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 0) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response) {
  console.log(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;
  console.log(response.data.name);
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;
  console.log(response.data.weather[0].description);
  console.log(response.data);
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;
  console.log(response.data.main.humidity);
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);
  console.log(Math.round(response.data.wind.speed));
  let dateElement = document.querySelector("#date");
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
}

let apiKey = "cabdbda40038ba7d1165b953b1c7bd6c";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Nairobi%20&appid=cabdbda40038ba7d1165b953b1c7bd6c&units=metric`;
console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);
