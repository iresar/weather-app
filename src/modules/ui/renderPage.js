import logo from "../../assets/logo/logo.png";

const renderPage = () => {
  const app = document.createElement("div");
  const img = document.createElement("img");
  const h1 = document.createElement("h1");
  const form = document.createElement("form");
  const input = document.createElement("input");
  const searchBtn = document.createElement("button");
  const container = document.createElement("div");
  const currentLocationBtn = document.createElement("button");

  app.classList.add("app");
  container.classList.add("container");
  currentLocationBtn.classList.add("current-location-btn");

  img.id = "logo";
  img.src = logo;
  h1.textContent = "Welcome to Nimbus - A simple weather app";
  input.type = "text";
  input.id = "search";
  input.required = true;
  currentLocationBtn.textContent = ".";
  searchBtn.textContent = "Search Location";

  form.append(input, currentLocationBtn, searchBtn);
  app.append(img, h1, form, container);

  return { app, input, searchBtn, currentLocationBtn };
};

export { renderPage };
