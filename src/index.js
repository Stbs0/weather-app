import processWeatherData from "./componants/processWeatherData";
import "./style.css";
import renderingData from "./rendering/renderingData";
const input = document.querySelector("input");
const button = document.querySelector("button");
button.addEventListener("click", async() => {
  const cityWeather = await processWeatherData(input.value).then((data) => {
    console.log(data);
     return data;
  });
  renderingData(cityWeather);
});
