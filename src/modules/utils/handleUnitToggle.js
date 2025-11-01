export function handleUnitToggle(feelslike, temperature, unitBtn, data) {
  let celsius = false;

  unitBtn.addEventListener("click", () => {
    if (!celsius) {
      const temp = Math.round((data.temp - 32) * (5 / 9));
      const feels = Math.round((data.feelslike - 32) * (5 / 9));
      temperature.textContent = `${temp}°C`;
      feelslike.textContent = `Feelslike: ${feels}°C`;
    } else {
      temperature.textContent = `${data.temp}°F`;
      feelslike.textContent = `Feelslike: ${data.feelslike}°F`;
    }
    celsius = !celsius;
  });
}
