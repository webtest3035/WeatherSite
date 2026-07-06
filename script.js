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


cityInputSubmit.addEventListener("click", () => {

    let city = cityInput.value;

    cityInput.value = "";

    if (city == "" || !isNaN(city)) {
        alert("Invalid Input !");
        return;
    }


});


async function getWeatherDate(city) {

    try {

        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);

        if (!response.ok) {
            throw new Error("Network Responce Is Not Ok");
        }

        let data = await response.json();

        console.log(data);

    }

    catch (error) {
        console.error("Error");
    }

}