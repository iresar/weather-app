import { fetchData } from "../../modules/api/fetchData.js";
import { renderWeather } from "../../modules/ui/renderWeather.js";

export function weatherController(pageElements) {
  pageElements.searchBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const weatherData = await fetchData(pageElements.input.value);
    renderWeather(pageElements, weatherData);
  });
}
