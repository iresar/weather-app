import { fetchData } from "../../modules/api/fetchData.js";
import { renderWeather } from "../../modules/ui/renderWeather.js";

export function weatherController(pageElements) {
  let location = {};
  location.coords = {};
  location.loc = {};
  console.log(location.coords);
  pageElements.searchBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    location.coords.hasValue = false;
    location.loc.hasValue = true;
    location.loc.value = pageElements.input.value;
    const weatherData = await fetchData(location);
    renderWeather(pageElements, weatherData);
  });
  pageElements.currentLocationBtn.addEventListener("click", (e) => {
    e.preventDefault();
    location.loc.hasValue = false;
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        location.coords.hasValue = true;
        location.coords.latitude = position.coords.latitude;
        location.coords.longitude = position.coords.longitude;
        const weatherData = await fetchData(location);
        renderWeather(pageElements, weatherData);
        console.log(location);
      },
      (error) => {
        console.error(error.message);
      },
      { enableHighAccuracy: true },
    );
  });
}
