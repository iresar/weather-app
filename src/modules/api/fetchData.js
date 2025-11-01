const fetchData = async (location) => {
  let response;
  if (location.loc.hasValue) {
    response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location.loc.value}?key=5CHPEKNU8KTMB9G69QAME9BRY`,
    );
  } else if (location.coords.hasValue) {
    response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location.coords.latitude},${location.coords.longitude}?key=5CHPEKNU8KTMB9G69QAME9BRY`,
    );
  }
  const weatherData = await response.json();
  const { conditions, feelslike, humidity, icon, temp, precip } =
    weatherData.currentConditions;
  return { conditions, feelslike, humidity, icon, temp, precip };
};

export { fetchData };
