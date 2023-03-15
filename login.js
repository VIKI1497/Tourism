var modal = document.getElementById("log1");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

/* Weather API */
function getWeather() {
  var location = document.getElementById("location").value;
  var apiKey = "083e964db844fec2e265044f925dfb54";
  var url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    location +
    "&appid=" +
    apiKey;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      var city = data.name;
      var temp = Math.round(data.main.temp - 273.15);
      var desc = data.weather[0].description;
      var country = data.sys.country;
      var icon =
        "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
      document.getElementById("weather").innerHTML =
        city +
        "  |" +
        "<img  src='" +
        icon +
        "' alt='Weather Icon'>   " +
        temp +
        "°C |" +
        desc +
        " |" +
        "country : " +
        country;

      console.log(data);
    })
    .catch((error) => alert("Enter the valid city!!"));
}
