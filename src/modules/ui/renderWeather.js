import { setBackground } from "../utils/setBackground.js";
import { findIcon } from "../utils/findIcon.js";
import { handleUnitToggle } from "../utils/handleUnitToggle.js";

export async function renderWeather(pageElements, data) {
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

  const imgName = await findIcon(data.icon);

  details.classList.add("details");
  unitBtn.classList.add("unit-btn");

  container.innerHTML = "";
  h1.textContent =
    pageElements.input.value === ""
      ? "Current Location"
      : pageElements.input.value;
  img.src = imgName;
  temperature.textContent = `${data.temp}°F`;
  conditions.textContent = `${data.conditions}`;
  feelslike.textContent = `Feelslike: ${data.feelslike}°F`;
  precipitation.textContent =
    data.precip === null ? "Precipitation: 0" : `Precipitation: ${data.precip}`;
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

  pageElements.input.value = "";

  handleUnitToggle(feelslike, temperature, unitBtn, data);
}
