const API_KEY = "cfb3bf2eacda89711ae1018e6946cd49";


// Elements
let searchBtn = document.getElementById("search-btn");
let cityInput = document.getElementById("city-input");
let errorMsg = document.getElementById("error-message");

let weatherCard = document.getElementById("weather-card");
let cityName = document.getElementById("city-name");
let weatherIcon = document.getElementById("weather-icon");
let temperature = document.getElementById("temperature");
let description = document.getElementById("description");
let humidity = document.getElementById("humidity");
let windSpeed = document.getElementById("wind-speed");

let forecastDiv = document.getElementById("forecast");

let clearBtn = document.getElementById("clear-btn");

clearBtn.addEventListener("click", () => {
    cityInput.value = "";
    errorMsg.textContent = "";
    weatherCard.classList.add("d-none");
    forecastDiv.innerHTML = "";

    // Reset background to default
    document.body.className = "";

    // Hide spinner if visible
    spinnerEl.classList.add("d-none");
});

// Spinner
let spinnerEl = document.getElementById("spinner");

function showLoader() {
    spinnerEl.classList.remove("d-none");
}

function hideLoader() {
    spinnerEl.classList.add("d-none");
}

// Search box button click
searchBtn.addEventListener("click", () => {
    let city = cityInput.value.trim();

    if (city === "") {
        errorMsg.textContent = "Please enter a city name.";
        return;
    }

    getWeather(city);
});

// Fetch Current Weather
function getWeather(city) {
    showLoader();
    errorMsg.textContent = "";

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        .then(res => res.json())
        .then(data => {
            hideLoader();

            if (data.cod === "404") {
                errorMsg.textContent = "City not found.";
                weatherCard.classList.add("d-none");
                forecastDiv.innerHTML = "";
                return;
            }

            displayWeather(data);
            updateBackground(data.weather[0].main.toLowerCase());
            getForecast(city);
        })
        .catch(() => {
            hideLoader();
            errorMsg.textContent = "Error fetching data.";

        });
}

function displayWeather(data) {
    weatherCard.classList.remove("d-none");

    cityName.textContent = data.name;
    temperature.textContent = `${data.main.temp}°C`;
    description.textContent = data.weather[0].description;

    humidity.textContent = data.main.humidity;
    windSpeed.textContent = data.wind.speed;

    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
}

// Background changer
function updateBackground(condition) {
    document.body.className = "";

    if (condition.includes("clear")) document.body.classList.add("clear");
    else if (condition.includes("cloud")) document.body.classList.add("clouds");
    else if (condition.includes("rain")) document.body.classList.add("rain");
    else if (condition.includes("thunder")) document.body.classList.add("thunderstorm");
    else if (condition.includes("snow")) document.body.classList.add("snow");
    else document.body.classList.add("haze");
}

// 5-day forecast
function getForecast(city) {
    showLoader();

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`)
        .then(res => res.json())
        .then(data => {
            hideLoader();
            displayForecast(data.list);
        })
        .catch(() => hideLoader());
}

function displayForecast(list) {
    forecastDiv.innerHTML = "";

    let daily = list.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 5);

    daily.forEach(day => {
        const date = new Date(day.dt_txt);
        const dayName = date.toLocaleDateString("en-US", { weekday: "short" });

        forecastDiv.innerHTML += `
            <div class="forecast-card">
                <h4>${dayName}</h4>
                <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" />
                <p>${day.weather[0].main}</p>
                <strong>${Math.round(day.main.temp_min)}° / ${Math.round(day.main.temp_max)}°</strong>
            </div>
        `;
    });
}

// Enter key support
cityInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        searchBtn.click();
    }
});
