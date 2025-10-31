import cleardayIcon from "../src/assets/icons/clear-day.png";
import clearnightIcon from "../src/assets/icons/clear-night.png";
import cloudyIcon from "../src/assets/icons/cloudy.png";
import fogIcon from "../src/assets/icons/fog.png";
import hailIcon from "../src/assets/icons/hail.png";
import partlycloudydayIcon from "../src/assets/icons/partly-cloudy-day.png";
import partlycloudynightIcon from "../src/assets/icons/partly-cloudy-night.png";
import rainIcon from "../src/assets/icons/rain.png";
import sleetIcon from "../src/assets/icons/sleet.png";
import snowIcon from "../src/assets/icons/snow.png";
import thunderstormIcon from "../src/assets/icons/thunderstorm.png";
import tornadoIcon from "../src/assets/icons/tornado.png";
import windIcon from "../src/assets/icons/wind.png";

import { fetchData } from "./fetchData.js";

function renderWeather(pageElements) {
  let weatherData;
  pageElements.searchBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    weatherData = await getWeatherData(pageElements.input.value);
    renderContainerElements(pageElements, weatherData);
  });
}

async function getWeatherData(location) {
  const weatherData = await fetchData(location);
  console.log(weatherData.temp);
  return weatherData;
}

function renderContainerElements(pageElements, data) {
  const app = document.querySelector(".app");
  const container = document.querySelector(".container");
  const h1 = document.createElement("h1");
  const details = document.createElement("div");
  const img = document.createElement("img");
  const temperature = document.createElement("h1");
  const conditions = document.createElement("p");
  const feelslike = document.createElement("p");
  const precipitation = document.createElement("p");
  const humidity = document.createElement("p");
  const unitBtn = document.createElement("button");

  const imgName = findIcon(data.icon);
  let celcius = false;

  details.classList.add("details");
  unitBtn.classList.add("unit-btn");

  container.innerHTML = "";
  h1.textContent = pageElements.input.value;
  img.src = imgName;
  temperature.textContent = `${data.temp}°F`;
  conditions.textContent = `${data.conditions}`;
  feelslike.textContent = `Feelslike: ${data.feelslike}°F`;
  precipitation.textContent =
    data.precip === null
      ? "Preciplitation: 0"
      : `Precipitation: ${data.precip}`;
  humidity.textContent = `Humidity: ${data.humidity}`;
  unitBtn.textContent = "Toggle Unit";

  setBackground(data.icon, app);

  details.append(
    img,
    temperature,
    conditions,
    feelslike,
    precipitation,
    humidity,
    unitBtn,
  );
  container.append(h1, details);

  unitBtn.addEventListener("click", () => {
    let temp;
    let feels;
    if (celcius === false) {
      temp = Math.round((data.temp - 32) * (5 / 9));
      feels = Math.round((data.feelslike - 32) * (5 / 9));
      temperature.textContent = `${temp}°C`;
      feelslike.textContent = `Feelslike: ${feels}°C`;
      celcius = true;
    } else {
      temperature.textContent = `${data.temp}°F`;
      feelslike.textContent = `Feelslike: ${data.feelslike}°F`;
      celcius = false;
    }
  });
}

function findIcon(data) {
  const conditions = {
    "clear-day": cleardayIcon,
    "clear-night": clearnightIcon,
    cloudy: cloudyIcon,
    fog: fogIcon,
    hail: hailIcon,
    "partly-cloudy-day": partlycloudydayIcon,
    "partly-cloudy-night": partlycloudynightIcon,
    rain: rainIcon,
    sleet: sleetIcon,
    snow: snowIcon,
    thunderstorm: thunderstormIcon,
    tornado: tornadoIcon,
    wind: windIcon,
  };
  return conditions[data];
}

function setBackground(icon, app) {
  app.classList = "";
  app.classList.add("app");
  app.classList.add(icon);
}

export { renderWeather };
