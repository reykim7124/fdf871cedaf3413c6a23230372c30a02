function showPosition(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  this.$store.dispatch("getWeather", { lat: lat, lon: lon });
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((data) => {
      this.showPosition(data);
    });
  }
}

export { showPosition, getLocation };
