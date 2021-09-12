let apiKey = "whatever it is";

fetchData = function (city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
    ).then((response) => response.json())
    .then((data) => displayWeather(data));
};

displayWeather = function (data) {
    const city_name = data.name;
    const current_temp = Math.round(data.main.temp);
    const temp_high = Math.round(data.main.temp_max);
    const temp_low = Math.round(data.main.temp_min);
    const humidity = Math.round(data.main.humidity);
    const forecast = data.weather[0].description;
    document.querySelector('.city').innerText = `${city_name}'s Weather: `
    document.querySelector('.current').innerText = `Current Temperature: ${current_temp}°F`
    document.querySelector('.temp_high').innerText = `High Temperature: ${temp_high}°F`
    document.querySelector('.temp_low').innerText = `Low Temperature: ${temp_low}°F`
    document.querySelector('.humidity').innerText = `Humidity: ${humidity}%`
    document.querySelector('.forecast').innerText = `Forecast: ${forecast}`
}

search = function (){
    fetchData(document.querySelector('.search').value);
}

document.querySelector('.input-section button').addEventListener('click', function() {
    search();
})


fetchData('Chicago')