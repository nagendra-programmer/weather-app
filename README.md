# 🌦️ Weather Application

A clean and responsive Weather Application built using **HTML, CSS, JavaScript, Bootstrap 4.5**, and the **OpenWeather API**.  
Users can search any city worldwide and instantly view real-time weather details along with a 5-day forecast.  
This project demonstrates strong understanding of APIs, DOM manipulation, asynchronous JavaScript, responsive UI design, and Bootstrap components.

---

## ✨ Features

- 🔍 **Search any city**
- 🌡️ **Live temperature updates**
- ☁️ **Weather condition with icons**
- 💧 **Humidity details**
- 💨 **Wind speed information**
- 📅 **5-day weather forecast**
- 🔄 **Bootstrap loading spinner**
- 🧹 **Clear button to reset results**
- 🎨 **Dynamic background based on weather**
- 📱 **Fully responsive design**

---

## 🛠️ Technologies Used

- **HTML5**  
- **CSS3**  
- **JavaScript (ES6)**  
- **Bootstrap 4.5**  
- **OpenWeather API**

---

## 📦 How to Run the Project

1. Clone the repository  
git clone https://github.com/nagendra-programmer/weather-app.git

2. Open the project folder   
3. Add your API Key inside the JavaScript file (`script.js`)  
const API_KEY = "your_api_key_here";

4. Run the `index.html` file in any browser  
5. Start exploring weather updates!

---

## 📁 Project Structure

```
weather-app/
│
├── index.html
├── style.css
├── script.js
└── README.md

```


---
## 🧠 How the Weather Application Works

 The user enters a city name in the input field and clicks the Search button or presses Enter.

- JavaScript sends a request to the OpenWeather API using the fetch method.

- A loading spinner is displayed while the weather data is being fetched.

- If the request is successful:

      - The current weather information such as temperature, description, humidity, and wind speed is displayed.

      - A weather icon is shown based on the current weather condition.

      - The background of the page changes dynamically according to the weather (clear, cloudy, rain, snow, etc.).

      - A 5-day weather forecast is fetched and displayed below the current weather.

- If the entered city is not found, a “City not found” error message is shown.

- If there is a network or API error, a “Error fetching weather data” message is displayed.

- In all error scenarios, the weather details and forecast are hidden to prevent displaying incorrect or stale data.

- The Clear button resets the input field, clears error messages, hides weather data, removes the forecast, and restores the default background.

- This implementation ensures proper error handling, dynamic UI updates, and a smooth user experience.

---

## 📸 Screenshots  


---

## 📊 Real-World Use Cases

Daily weather checking for any city worldwide

Travel planning based on current and forecasted weather conditions

Beginner-friendly project to understand API integration

Practice project for JavaScript fetch, promises, and error handling

Learning dynamic UI updates and conditional rendering

Foundation for building advanced weather dashboards or full-stack applications

---

## 🚀 Future Enhancements

- Add geolocation-based weather detection  
- Add dark/light theme  
- Add °C/°F temperature toggle  
- Add search history  
- Add voice-based city search  

---

## 📄 License  
This project is open-source and free to use.

---

## 👨‍💻 Developer  
**Nagendra**  
A passionate frontend developer learning MERN stack & building real-world projects.
