/** @format */
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
}

let apiKey = "cabdbda40038ba7d1165b953b1c7bd6c";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Nairobi%20&appid=cabdbda40038ba7d1165b953b1c7bd6c&units=metric`;
console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);
