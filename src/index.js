import "./styles.css";

import { renderPage } from "./modules/ui/renderPage.js";
import { weatherController } from "./modules/controller/weatherController.js";

function initApp() {
  const pageElements = renderPage();
  document.body.append(pageElements.app);

  weatherController(pageElements);
}

initApp();
