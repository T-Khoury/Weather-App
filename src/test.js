


async function getWeatherData(location) {
    const testWeatherResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=d9d73d45bda84b8fbaf152928232609&q=${location}&days=3`);
    
    const weatherData = await testWeatherResponse.json();

    console.log(weatherData);

    return weatherData
    
    
}



/*const testIcon = `https:${testWeatherData.current.condition.icon}`;
    console.log(testIcon);

    weatherTest.textContent = testWeatherData.current.condition.text;
    weatherTestIcon.setAttribute('src', testIcon);
    weatherTestDiv.append(weatherTest, weatherTestIcon);
    document.body.appendChild(weatherTestDiv);
*/
export { getWeatherData };
