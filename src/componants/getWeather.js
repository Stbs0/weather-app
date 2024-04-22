export default async function getWeather(city) {
  try {
    // get weather
    const forecast = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key= 6650a42df5dd461bb6b165953242204&q=${city}&days=3`,
      {
        mode: "cors",
      }
    );

    console.log(forecast);
    const forecastData = await forecast.json();
    console.log(forecastData);
    return forecastData;
  } catch (error) {
    console.log(error);
  }
}

