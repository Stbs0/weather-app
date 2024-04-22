import getWeather from "./getWeather";
export default async function processWeatherData(city) {
  const weatherData = await getWeather(city);
  console.log(weatherData);
  const processedData = {
    city: weatherData.location.name,
    region: weatherData.location.region,
    country: weatherData.location.country,
    isDay: weatherData.current.is_day,
    humidity: weatherData.current.humidity,
    updatedTime: weatherData.current.last_updated,
    temperatureC: weatherData.current.temp_c,
    temperatureF: weatherData.current.temp_f,
    condition: weatherData.current.condition.text,
    conditionIcon: weatherData.current.condition.icon,
  };
  console.log(processedData);
  return processedData;
}
