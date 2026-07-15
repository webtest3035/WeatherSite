const apiKey = "2df52787115a4e203aaa0a5f4370b43a";
const cityInput = document.getElementById("cityInput");
const cityInputSubmit = document.getElementById("cityInputSubmit");
let cityName = document.getElementById("cityName");
let weatherIcon = document.getElementById("weatherIcon");
let temprature = document.getElementById("temprature");
let description = document.getElementById("description");
let feelsLike = document.getElementById("feelsLike");
let humidity = document.getElementById("humidity");
let windSpeed = document.getElementById("windSpeed");
const loading = document.getElementById("loading");


cityInputSubmit.addEventListener("click", () => {

    let city = cityInput.value;

    cityInput.value = "";

    if (city == "" || !isNaN(city)) {
        alert("Invalid Input !");
        return;
    }

    getWeatherDate(city);

});


async function getWeatherDate(city) {

    showLoading();

    try {

        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);

        if (response.status === 404) {
            alert("City not found");
            return;
        }

        if (response.status === 500) {
            alert("Server error");
            return;
        }

        let data = await response.json();


        cityName.textContent = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();

        weatherIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather Icon">`;

        temprature.textContent = `${Math.floor(data.main.temp)}°C`;

        description.textContent = `${data.weather[0].description}`

        feelsLike.textContent = `Feels Like: ${data.main.feels_like}°C`;

        humidity.textContent = `Humidity: ${data.main.humidity}%`;

        windSpeed.textContent = `Wind Speed: ${data.wind.speed}M/S`;

    }

    catch (error) {
        console.error("Error");
    }

    finally {
        hideLoading();
    }

}


function showLoading() {
    loading.style.display = "block";
}

function hideLoading() {
    loading.style.display = "none";
}