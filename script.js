var cityEl = document.querySelector("#cityInput");
var cityFormEl = document.querySelector("#city-form");
var locationEl = document.querySelector("#city-location");
var temperatureEl = document.querySelector("#temperature");
var descEl = document.querySelector("#desc");
var descriptionData = document.querySelector("description-data");
var windEl = document.querySelector(".wind-data");
var windDegEl = document.querySelector(".wind-degree-data");
var humidityEl = document.querySelector(".humidity-data");
var tableBody = document.querySelector("#forecast-container")


function getApi(city) {
    var weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=6e5dd978f10ad44dc4fa36386d4e8fdb";

    fetch(weatherUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)

            const location = data.name;
            locationEl.textContent = location;

            const temperature = data.main.temp;
            temperatureEl.textContent = temperature;

            const description = data.weather[0].main;
            descEl.textContent = description;

            const windSpeed = data.wind.speed;
            windEl.textContent = windSpeed;

            const windDeg = data.wind.deg;
            windDegEl.textContent = windDeg;

            const humidity = data.main.humidity;
            humidityEl.textContent = humidity + "%";

            for (var i = 0; i < data.length; i++) {
            }
        });
}

function getForecast(city) {
    var weatherUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=6e5dd978f10ad44dc4fa36386d4e8fdb";

    fetch(weatherUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)

            for (var i = 0; i < 5; i++) {
                console.log(data);
                var forecastEl = document.createElement('div');
                forecastEl.classList.add('card');


                var titleEl = document.createElement('div');
                titleEl.classList.add('card-header');
                titleEl.textContent = data.list[i].dt_txt;
                forecastEl.append(titleEl);

                var dayBody = document.createElement('div');
                dayBody.classList.add('card-body');
                dayBody.textContent = data.list[i].main.temp;
                titleEl.append(dayBody);

                tableBody.append(forecastEl);







            }

        });
}





var formSubmitHandler = function (event) {
    event.preventDefault();

    var city = cityEl.value;

    if (!city) {
        return;
    }

    getApi(city);
    getForecast(city);


}







cityFormEl.addEventListener('submit', formSubmitHandler);