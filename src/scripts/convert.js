function precipitation() {
  return (this.weather.pop * 100).toFixed(0);
}

function calcTemp() {
  return this.temp == "c"
    ? (this.weather.main.temp - 273.15).toFixed(0)
    : (((this.weather.main.temp - 273.15) * 9) / 5 + 32).toFixed(0);
}

function calcWind() {
  return (this.weather.wind.speed * 2.237).toFixed(0);
}

export { precipitation, calcTemp, calcWind };
