import store from "../store"

function showPosition(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  store.dispatch("getWeather", { lat: lat, lon: lon, type: "current" });
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((data) => {
      showPosition(data);
    });
  }
}

export { showPosition, getLocation };
