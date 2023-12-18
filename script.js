document.getElementById('get-weather-btn').addEventListener('click', function () {
    var city = document.getElementById('city-input').value;

   
    var apiKey = "9503972fe792b1d4b4250369ee20f538";

    // Make a request to the OpenWeatherMap API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            // Display weather information
            var weatherInfo = document.getElementById('weather-info');
            weatherInfo.innerHTML = `
                <h3>${data.name}, ${data.sys.country}</h3>
                <p>Temperature: ${Math.round(data.main.temp - 273.15)}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            var weatherInfo = document.getElementById('weather-info');
            weatherInfo.innerHTML = '<p>Error fetching weather data</p>';
        });
});