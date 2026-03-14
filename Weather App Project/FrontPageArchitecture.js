async function getWeatherResult(){
    const API_KEY = '53d91ae84117446da6871942261403';
    const city = document.getElementById('cityName').value;

    if(!city) {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;
    
    try {
        const response = await fetch(url);
        const weatherData = await response.json();

        if (weatherData.error) {
            alert(weatherData.error.message);
            return;
        }

        document.getElementById('location').innerText = `${weatherData.location.name}, ${weatherData.location.country}`;
        
        document.getElementById('condition').innerText = weatherData.current.condition.text;
        document.getElementById('weatherIcon').src = `https:${weatherData.current.condition.icon}`;
        document.getElementById('temperature').innerText = `${weatherData.current.temp_c}°C`;
        document.getElementById('humidity').innerText = `${weatherData.current.humidity}%`;

    } catch(error) {
        console.error(error);
        alert("An error occurred while fetching the data.");    
    }
}
