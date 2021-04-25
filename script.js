var cityEl = document.querySelector("#cityInput");
var cityFormEl = document.querySelector("#city-form");
var locationEl = document.querySelector("#city-location");
var temperatureEl = document.querySelector("#temperature");
var descriptionData = document.querySelector("description-data");
var humidityEl = document.querySelector("#humidity-data");
var windEl = document.querySelector("#wind-data");
var humidityEl = document.querySelector("#humidity-data");





var formSubmitHandler = function (event) {
    event.preventDefault();

    var city = cityEl.value;

    if (city) {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=6e5dd978f10ad44dc4fa36386d4e8fdb')
            .then(function (resp) { return resp.json() })
            .then(function (data) {
                console.log(data);
                const location = data.name;
                locationEl.textContent = location;
            })
            .catch(function () {

            })

        fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=6e5dd978f10ad44dc4fa36386d4e8fdb')
            .then(function (resp) { return resp.json() })
            .then(function (data) {
                console.log(data);
            })
            .catch(function () {

            })








    } else {
        alert('Please enter a city');
    }
};

cityFormEl.addEventListener('submit', formSubmitHandler);