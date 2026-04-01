const apiKey = "YOUR_API_KEY";

async function getWeather() {
    const city = document.getElementById("city").value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
        document.getElementById("weather").innerHTML = "City not found";
        return;
    }

    document.getElementById("weather").innerHTML = `
    <h2>${data.name}</h2>
    <p>Temperature: ${data.main.temp}°C</p>
    <p>Weather: ${data.weather[0].main}</p>
    <p>Humidity: ${data.main.humidity}%</p>
  `;
}