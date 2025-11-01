import { fetchData } from "../../modules/api/fetchData.js";
import { renderWeather } from "../../modules/ui/renderWeather.js";

export function weatherController(pageElements) {
  pageElements.searchBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const weatherData = await fetchData(pageElements.input.value);
    renderWeather(pageElements, weatherData, {
      title: pageElements.input.value,
    });
  });
  pageElements.currentLocationBtn.addEventListener("click", (e) => {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const coords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        const weatherData = await fetchData(coords);
        renderWeather(pageElements, weatherData, { title: "Current Location" });
      },
      (error) => {
        console.error(error.message);
      },
      { enableHighAccuracy: true },
    );
  });
}
