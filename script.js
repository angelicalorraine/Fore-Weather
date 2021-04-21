


fetch('https://api.openweathermap.org/data/2.5/find?lat=55.5&lon=37.5&cnt=10&appid=6e5dd978f10ad44dc4fa36386d4e8fdb')
    .then(response => response.json())
    .then(data => console.log(data));


