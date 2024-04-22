import getWeather from "./componants/getWeather";
import processWeatherData from "./componants/processWeatherData";

const input = document.querySelector("input");
const button = document.querySelector("button");
button.addEventListener("click", () => {
  const cityWeather = processWeatherData(input.value).then((data) => {
    console.log(data);
    return data;
  });
});
