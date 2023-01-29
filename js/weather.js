const API_KEY = "b797ba4eb269f71aa1b2d5a8f2f0f606";

function onGeoSuccess(postion) {
  const lat = postion.coords.latitude;
  const lon = postion.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
      const weather = document.querySelector(".weather span:first-child");
      const city = document.querySelector(".weather span:last-child");

      city.innerText = data.name;
      weather.innerText = `☁️ ${data.weather[0].main} 🌡 ${data.main.temp}℃ 🌏 `;
    });
}

function onGeoError() {}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
