import { getWeatherData } from "./test";
import { displayWeather } from "./displayWeather";
import { createLocalWeather } from "./localWeather";




function formHandler() {
    const form = document.querySelector('form');
    const locationInput = document.getElementById('location-input');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        getWeatherData(locationInput.value)
            .then(displayWeather)
    });
}

function weatherDisplayContainer() {
    const content = document.getElementById('content');
    const displayContainer = document.createElement('div');
    displayContainer.setAttribute('id', 'weather-container');

    const todayWeatherContainer = document.createElement('div');
    todayWeatherContainer.setAttribute('id', 'today-weather');

    const todayWeatherTopContainer = document.createElement('div');
    todayWeatherTopContainer.setAttribute('id', 'today-top-container');

    const todayLocationandConditions = document.createElement('div');
    todayLocationandConditions.setAttribute('id', 'today-location-conditions');

    const todayLocation = document.createElement('div');
    todayLocation.setAttribute('id', 'location-container');
    const locationName = document.createElement('p');
    locationName.setAttribute('id', 'location-name');
    const locationRegion = document.createElement('p');
    locationRegion.setAttribute('id', 'location-region');
    const locationCountry = document.createElement('p');
    locationCountry.setAttribute('id', 'location-country');
    todayLocation.append(locationName, locationRegion, locationCountry)

    const todayConditions = document.createElement('div');
    todayConditions.setAttribute('id', 'today-conditions');
    const currentTemp = document.createElement('p');
    currentTemp.setAttribute('id', 'current-temp');
    const currentIcon = document.createElement('img');
    currentIcon.setAttribute('id', 'current-icon');
    const currentCondition = document.createElement('p');
    currentCondition.setAttribute('id', 'current-condition');
    todayConditions.append(currentTemp, currentIcon, currentCondition);

    todayLocationandConditions.append(todayLocation, todayConditions);

    const todayWeatherOtherInfo = document.createElement('div');
    todayWeatherOtherInfo.setAttribute('id', 'today-other-info');
    const todayFeelsLike = document.createElement('p');
    todayFeelsLike.setAttribute('id', 'today-feelslike');
    const todayHumidity = document.createElement('p');
    todayHumidity.setAttribute('id', 'today-humidity');
    const todayUV = document.createElement('p');
    todayUV.setAttribute('id', 'today-uv');
    const todayWind = document.createElement('p');
    todayWind.setAttribute('id', 'today-wind');
    const todayRainChance = document.createElement('p');
    todayRainChance.setAttribute('id', 'today-rain');
    todayWeatherOtherInfo.append(todayFeelsLike, todayRainChance, todayHumidity, todayUV, todayWind);


    todayWeatherTopContainer.append(todayLocationandConditions, todayWeatherOtherInfo)


    const todayHourlyWeatherForecast = document.createElement('div');
    todayHourlyWeatherForecast.setAttribute('id', 'today-hourly-forecast');
    let counter = 12;
    for (let i = 0; i < 8; i++) {
        const todayHourWeather = document.createElement('div');
        todayHourWeather.setAttribute('class', 'todayHour');
        todayHourWeather.dataset.hour = i;
        const todayHourNumber = document.createElement('p'); 
        switch (todayHourWeather.dataset.hour) {
            case "0":
            case "1":
            case "2":
            case "3":
                todayHourNumber.textContent = `${counter}AM`;
                break;
            default: 
                todayHourNumber.textContent = `${counter}PM`;
                break;
        }
        
        if (counter === 12) {
            counter = 3;
        } else {
            counter += 3;
        };

        const todayHourIcon = document.createElement('img');
        const todayHourTemp = document.createElement('p');
        todayHourTemp.setAttribute('class', 'hourly-temp');
        todayHourIcon.setAttribute('class', 'hourly-icon');
        todayHourWeather.append(todayHourIcon, todayHourTemp, todayHourNumber);
        todayHourlyWeatherForecast.append(todayHourWeather);
    };

    todayWeatherContainer.append(todayWeatherTopContainer, todayHourlyWeatherForecast);

    
    
    
    const tomorrowWeatherContainer = document.createElement('div');
    tomorrowWeatherContainer.setAttribute('id', 'tomorrow-weather');
    const tomorrowTopContainer = document.createElement('div');
    tomorrowTopContainer.setAttribute('class', 'tmrw-dayafter-top-container');
    const tomorrowDate = document.createElement('p');
    tomorrowDate.setAttribute('class', 'tmrw-dayafter-date');
    const tomorrowIcon = document.createElement('img');
    tomorrowIcon.setAttribute('class', 'tmrw-dayafter-icon');
    const tomorrowCondition = document.createElement('p');
    tomorrowCondition.setAttribute('class', 'tmrw-dayafter-condition');
    const tomorrowAvgTemp = document.createElement('p');
    tomorrowAvgTemp.setAttribute('class', 'tmrw-dayafter-temp');
    const tomorrowRain = document.createElement('p');
    tomorrowRain.setAttribute('class', 'tmrw-dayafter-rain');

    tomorrowTopContainer.append(tomorrowDate, tomorrowIcon, tomorrowCondition, tomorrowAvgTemp, tomorrowRain);


    const tomorrowHighLow = document.createElement('div');
    tomorrowHighLow.setAttribute('class', 'high-low');
    const tomorrowHighContainer = document.createElement('div');
    tomorrowHighContainer.setAttribute('class', 'tmrw-dayafter-high');
    const tomorrowHighTemp = document.createElement('p');
    tomorrowHighTemp.setAttribute('class', 'tmrw-dayafter-high-temp');
    const tomorrowHighText = document.createElement('p');
    tomorrowHighText.textContent = 'High';
    tomorrowHighContainer.append(tomorrowHighTemp,tomorrowHighText);
    const tomorrowLowContainer = document.createElement('div');
    tomorrowLowContainer.setAttribute('class', 'tmrw-dayafter-low');
    const tomorrowLowTemp = document.createElement('p');
    tomorrowLowTemp.setAttribute('class', 'tmrw-dayafter-low-temp');
    const tomorrowLowText = document.createElement('p');
    tomorrowLowText.textContent = 'Low';
    tomorrowLowContainer.append(tomorrowLowTemp, tomorrowLowText);

    tomorrowHighLow.append(tomorrowHighContainer, tomorrowLowContainer);
    tomorrowWeatherContainer.append(tomorrowTopContainer, tomorrowHighLow);

    const dayAfterTmrwWeatherContainer = document.createElement('div');
    dayAfterTmrwWeatherContainer.setAttribute('id', 'dayAfter-weather');
    const dayAfterTmrwTopContainer = document.createElement('div');
    dayAfterTmrwTopContainer.setAttribute('class', 'tmrw-dayafter-top-container');
    const dayAfterTmrwDate = document.createElement('p');
    dayAfterTmrwDate.setAttribute('class', 'tmrw-dayafter-date');
    const dayAfterTmrwIcon = document.createElement('img');
    dayAfterTmrwIcon.setAttribute('class', 'tmrw-dayafter-icon');
    const dayAfterTmrwCondition = document.createElement('p');
    dayAfterTmrwCondition.setAttribute('class', 'tmrw-dayafter-condition');
    const dayAfterTmrwAvgTemp = document.createElement('p');
    dayAfterTmrwAvgTemp.setAttribute('class', 'tmrw-dayafter-temp');
    const dayAfterTmrwRain = document.createElement('p');
    dayAfterTmrwRain.setAttribute('class', 'tmrw-dayafter-rain');

    dayAfterTmrwTopContainer.append(dayAfterTmrwDate, dayAfterTmrwIcon, dayAfterTmrwCondition, dayAfterTmrwAvgTemp, dayAfterTmrwRain);

    
    const dayAfterTmrwHighLow = document.createElement('div');
    dayAfterTmrwHighLow.setAttribute('class', 'high-low');
    const dayAfterTmrwHighContainer = document.createElement('div');
    dayAfterTmrwHighContainer.setAttribute('class', 'tmrw-dayafter-high');
    const dayAfterTmrwHighTemp = document.createElement('p');
    dayAfterTmrwHighTemp.setAttribute('class', 'tmrw-dayafter-high-temp');
    const dayAfterTmrwHighText = document.createElement('p');
    dayAfterTmrwHighText.textContent = 'High';
    dayAfterTmrwHighContainer.append(dayAfterTmrwHighTemp,dayAfterTmrwHighText);
    const dayAfterTmrwLowContainer = document.createElement('div');
    dayAfterTmrwLowContainer.setAttribute('class', 'tmrw-dayafter-low');
    const dayAfterTmrwLowTemp = document.createElement('p');
    dayAfterTmrwLowTemp.setAttribute('class', 'tmrw-dayafter-low-temp');
    const dayAfterTmrwLowText = document.createElement('p');
    dayAfterTmrwLowText.textContent = 'Low';
    dayAfterTmrwLowContainer.append(dayAfterTmrwLowTemp, dayAfterTmrwLowText);

    dayAfterTmrwHighLow.append(dayAfterTmrwHighContainer, dayAfterTmrwLowContainer);
    dayAfterTmrwWeatherContainer.append(dayAfterTmrwTopContainer, dayAfterTmrwHighLow);

    content.append(todayWeatherContainer, tomorrowWeatherContainer, dayAfterTmrwWeatherContainer);

}



export { formHandler, weatherDisplayContainer }
