const form = document.getElementById("form");
const input = document.getElementById("input");
const temp = document.getElementById("temp");
const ifo = document.getElementById("ifo");
const highlightImg = document.getElementById("hightlight_img");
const wind = document.getElementById("windspeed");
const cloud = document.getElementById("cloud");
const feels = document.getElementById("feel");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = input.value;
  const apiKey = "1f3c0662798a43018a633503231909";
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;

  // get data
  async function getData() {
    const data = await fetch(apiUrl);
    const res = await data.json();
    console.log(res);
    const tempc = res.current.temp_c;
    const condition = res.current.condition.text;
    const location = res.location.name;
    const icon = res.current.condition.icon;
    const windSpeed = res.current.wind_kph;
    const feelsLike = res.current.feelslike_c;
    const clouds = res.current.cloud;
    temp.innerHTML = `${tempc}<sup>0</sup>C`;
    highlightImg.src = icon;
    ifo.innerText = location;
    wind.innerHTML = `${windSpeed} KM/h`;
    cloud.innerHTML = `${clouds}%`;
    feels.innerHTML = `${feelsLike}`;
  }
  getData();
});
