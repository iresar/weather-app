const fetchData = async (location) => {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=5CHPEKNU8KTMB9G69QAME9BRY`,
  );
  const weatherData = await response.json();
  const { conditions, feelslike, humidity, icon, temp, precip } =
    weatherData.currentConditions;
  return { conditions, feelslike, humidity, icon, temp, precip };
};

export { fetchData };
