async function getWeather(city) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key= 6650a42df5dd461bb6b165953242204&q=${city}`,
      {
        mode: "cors",
      }
    );
    const weatherData = await response.json();
    console.log(weatherData);
    return weatherData
  } catch (error) {
    console.log(error);
  }
}
const cityWeather= getWeather("jeddah");

function processWeatherData(data){

    
}
