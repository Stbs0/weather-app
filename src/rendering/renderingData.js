const { format } = require("date-fns");
export default function renderingData(data) {
  const tempC = document.querySelector(".temp_C");
  tempC.textContent = data.temperatureC;
  const iconTemp = document.querySelector(".temp_icon");
  iconTemp.src = data.conditionIcon;
  const max = document.querySelector(".max");
  max.textContent = `${data.maxtemp_c}C\u00B0 / ${data.mintemp_c}C\u00B0`;

  const wind = document.querySelector(".wind");
  wind.textContent = `${data.windSpeed}km/h`;
  const humidity = document.querySelector(".humidity");
  humidity.textContent = `${data.humidity}%`;
  const cloud = document.querySelector(".cloud");
  cloud.textContent = `${data.cloud}%`;
  const location = document.querySelector(".location");
  location.textContent = `${data.city}, ${data.region}, ${data.country}`;

  const date = document.querySelector(".date");
  date.textContent = new Date().toDateString();
  const forecastImg = document.querySelectorAll(".forecast_img");

  for (let i = 0; i < forecastImg.length; i++) {
    forecastImg[i].src = data.forecastIcon[i];
  }
  const forecastTemp = document.querySelectorAll(".forecast_temp");
  for (let i = 0; i < forecastTemp.length; i++) {
    forecastTemp[
      i
    ].textContent = `${data.forecastMinTemp[i]}C\u00B0 / ${data.forecastMaxTemp[i]}C\u00B0`;
  }
  const day = document.querySelectorAll(".day");

  for (let i = 0; i < day.length; i++) {
    day[i].textContent = format(new Date(data.dateForecast[i]), "EEEE");
  }
}
