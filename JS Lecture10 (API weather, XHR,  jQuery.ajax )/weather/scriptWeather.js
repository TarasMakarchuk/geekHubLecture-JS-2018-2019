let locationPoint, stringXhrRequest, xhr, serverResponse,
    ulElement, temperature, weather, pressure,
    wind, humidity, visibility, coordinates, country,
    spanElement;

let weatherLocation = document.getElementById('weather-location');
let errorText = document.getElementsByClassName('error')[0];
weatherLocation.addEventListener('submit', function (event) {
    event.preventDefault();
    locationPoint = document.getElementById('text-location');
    if (locationPoint.value.length) {
        stringXhrRequest = 'http://api.openweathermap.org/data/2.5/weather?q=' + locationPoint.value + '&units=metric&APPID=52877c77cd2a411fe2231bc0b58ad487';
        xhr = new XMLHttpRequest();
        xhr.open('GET', stringXhrRequest, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                serverResponse = JSON.parse(xhr.responseText);
                if (serverResponse.cod !== 200) {
                    errorText.innerText = 'city not found';
                } else {
                    errorText.innerText = "";
                }
                weatherData(serverResponse);
            }
        };
        xhr.send();
    }
});

function weatherData(item) {
    if (item.sys !== undefined) {
        spanElement = document.createElement('span');
        weatherLocation.appendChild(spanElement);
        ulElement = document.createElement('ul');
        spanElement.appendChild(ulElement);
        country = document.createElement('li');
        country.innerHTML = 'country: ' + item.sys.country;
        ulElement.appendChild(country);
        let location = document.createElement('li');
        location.innerHTML = 'location: ' + item.name;
        ulElement.appendChild(location);
        temperature = document.createElement('li');
        temperature.innerHTML = 'air temperature: ' + Math.round(item.main.temp) + ' ℃';
        ulElement.appendChild(temperature);
        weather = document.createElement('li');
        weather.innerHTML = 'clouds: ' + item.clouds.all + '%';
        ulElement.appendChild(weather);
        pressure = document.createElement('li');
        pressure.innerHTML = 'atmosphere pressure: ' + Math.round(item.main.pressure * 0.749) + ' mm';
        ulElement.appendChild(pressure);
        wind = document.createElement('li');
        wind.innerHTML = 'wind speed: ' + item.wind.speed + ' m/s';
        ulElement.appendChild(wind);
        humidity = document.createElement('li');
        humidity.innerHTML = 'air humidity: ' + item.main.humidity + ' %';
        ulElement.appendChild(humidity);
        visibility = document.createElement('li');
        visibility.innerHTML = 'visibility: ' + item.visibility + ' m';
        ulElement.appendChild(visibility);
        coordinates = document.createElement('li');
        coordinates.innerHTML = 'coordinates: ' + item.coord.lon + ' longitude, ' + item.coord.lat + ' latitude';
        ulElement.appendChild(coordinates);
    }
}