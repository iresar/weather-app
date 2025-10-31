import "./styles.css";

import { renderPage } from "./renderPage.js";
import { renderWeather } from "./renderWeather.js";

function initApp() {
  const pageElements = renderPage();
  // document.body.append(pageElements.app, pageElements.container);
  document.body.append(pageElements.app);

  renderWeather(pageElements);
}
initApp();
