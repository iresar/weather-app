const fetchData = async (location) => {
  let response;
  if (typeof location === "string") {
    response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=5CHPEKNU8KTMB9G69QAME9BRY`,
    );
  } else if (typeof location === "object") {
    response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location.latitude},${location.longitude}?key=5CHPEKNU8KTMB9G69QAME9BRY`,
    );
  } else {
    throw new Error("Invalid Input Location");
  }
  const weatherData = await response.json();
  const { conditions, feelslike, humidity, icon, temp, precip } =
    weatherData.currentConditions;
  return { conditions, feelslike, humidity, icon, temp, precip };
};

export { fetchData };
