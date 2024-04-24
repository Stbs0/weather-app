import getWeather from "./getWeather";
export default async function processWeatherData(city) {
  const weatherData = await getWeather(city);
  console.log(weatherData);
  const processedData = {
    dateForecast: [
      weatherData.forecast.forecastday[1].date,
      weatherData.forecast.forecastday[2].date,
      weatherData.forecast.forecastday[3].date,
    ],
    forecastMinTemp: [
      weatherData.forecast.forecastday[1].day.mintemp_c,
      weatherData.forecast.forecastday[2].day.mintemp_c,
      weatherData.forecast.forecastday[3].day.mintemp_c,
    ],
    forecastMaxTemp: [
      weatherData.forecast.forecastday[1].day.maxtemp_c,
      weatherData.forecast.forecastday[2].day.maxtemp_c,
      weatherData.forecast.forecastday[3].day.maxtemp_c,
    ],
    forecastIcon: [
      weatherData.forecast.forecastday[1].day.condition.icon,

      weatherData.forecast.forecastday[2].day.condition.icon,
      weatherData.forecast.forecastday[3].day.condition.icon,
    ],
    maxtemp_c: weatherData.forecast.forecastday[0].day.maxtemp_c,
    mintemp_c: weatherData.forecast.forecastday[0].day.mintemp_c,
    windSpeed: weatherData.current.wind_kph,
    cloud: weatherData.current.cloud,

    city: weatherData.location.name,
    region: weatherData.location.region,
    country: weatherData.location.country,
    isDay: weatherData.current.is_day,
    humidity: weatherData.current.humidity,

    temperatureC: weatherData.current.temp_c,
    temperatureF: weatherData.current.temp_f,
    condition: weatherData.current.condition.text,
    conditionIcon: weatherData.current.condition.icon,
  };
  console.log(processedData);
  return processedData;
}
