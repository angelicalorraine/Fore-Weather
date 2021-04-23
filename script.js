var cityFormEl = document.querySelector('#city-form');
var cityInputEl = document.querySelector('#city');
var forecastContainerEl = document.querySelector('#forecast-container');
var citySearchTerm = document.querySelector('#city-search-term');

cityInputEl = "Whittier";

currentURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityInputEl + '&appid=6e5dd978f10ad44dc4fa36386d4e8fdb';

forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityInputEl + '&appid=6e5dd978f10ad44dc4fa36386d4e8fdb';



fetch(currentURL)
    .then(response => response.json())
    .then(data => console.log(data));

fetch(forecastURL)
    .then(response => response.json())
    .then(data => console.log(data));

