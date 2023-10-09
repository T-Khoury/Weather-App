import { createLocalWeather } from "./localWeather";


    



function displayWeather(apiData) {
    const locationName = document.querySelector('#location-name');
    const locationRegion = document.querySelector('#location-region');
    const locationCountry = document.querySelector('#location-country');

    const currentTemp = document.querySelector('#current-temp');
    const currentIcon = document.querySelector('#current-icon');
    const currentCondition = document.querySelector('#current-condition');
    const todayRainChance = document.querySelector('#today-rain');

    const todayFeelsLike = document.querySelector('#today-feelslike');
    const todayHumidity = document.querySelector('#today-humidity');
    const todayUV = document.querySelector('#today-uv');
    const todayWind = document.querySelector('#today-wind');

    const today12AMIcon = document.querySelector('[data-hour="1"] img');
    const today12AMTemp = document.querySelector('[data-hour="1"] p');
    const today3AMIcon = document.querySelector('[data-hour="2"] img');
    const today3AMTemp = document.querySelector('[data-hour="2"] p');
    const today6AMIcon = document.querySelector('[data-hour="3"] img');
    const today6AMTemp = document.querySelector('[data-hour="3"] p');
    const today9AMIcon = document.querySelector('[data-hour="4"] img');
    const today9AMTemp = document.querySelector('[data-hour="4"] p');
    const today12PMIcon = document.querySelector('[data-hour="5"] img');
    const today12PMTemp = document.querySelector('[data-hour="5"] p');
    const today3PMIcon = document.querySelector('[data-hour="6"] img');
    const today3PMTemp = document.querySelector('[data-hour="6"] p');
    const today6PMIcon = document.querySelector('[data-hour="7"] img');
    const today6PMTemp = document.querySelector('[data-hour="7"] p');
    const today9PMIcon = document.querySelector('[data-hour="8"] img');
    const today9PMTemp = document.querySelector('[data-hour="8"] p');


    const tomorrowDate = document.querySelector('#tomorrow-weather .tmrw-dayafter-date');
    const tomorrowIcon = document.querySelector('#tomorrow-weather .tmrw-dayafter-icon');
    const tomorrowCondition = document.querySelector('#tomorrow-weather .tmrw-dayafter-condition');
    const tomorrowTemp = document.querySelector('#tomorrow-weather .tmrw-dayafter-temp');
    const tomorrowRain = document.querySelector('#tomorrow-weather .tmrw-dayafter-rain');
    const tomorrowHigh = document.querySelector('#tomorrow-weather .tmrw-dayafter-high-temp');
    const tomorrowLow = document.querySelector('#tomorrow-weather .tmrw-dayafter-low-temp');

    const dayAfterTmrwDate = document.querySelector('#dayAfter-weather .tmrw-dayafter-date');
    const dayAfterTmrwIcon = document.querySelector('#dayAfter-weather .tmrw-dayafter-icon');
    const dayAfterTmrwCondition = document.querySelector('#dayAfter-weather .tmrw-dayafter-condition');
    const dayAfterTmrwTemp = document.querySelector('#dayAfter-weather .tmrw-dayafter-temp');
    const dayAfterTmrwRain = document.querySelector('#dayAfter-weather .tmrw-dayafter-rain');
    const dayAfterTmrwHigh = document.querySelector('#dayAfter-weather .tmrw-dayafter-high-temp');
    const dayAfterTmrwLow = document.querySelector('#dayAfter-weather .tmrw-dayafter-low-temp');
    createLocalWeather(apiData)
        .then((data) => {
            locationName.textContent = data.currentWeather.location.name;
            locationRegion.textContent = data.currentWeather.location.region;
            locationCountry.textContent = data.currentWeather.location.country;

            currentTemp.textContent = data.currentWeather.temperature;
            currentIcon.src = data.currentWeather.icon;
            currentCondition.textContent = data.currentWeather.condition;
            todayRainChance.textContent = data.currentWeather.percipitation;

            todayFeelsLike.textContent = data.currentWeather.feelslike;
            todayHumidity.textContent = data.currentWeather.humidity;
            todayUV.textContent = data.currentWeather.uv;
            todayWind.textContent = data.currentWeather.windspeed;

            today12AMIcon.src = data.currentWeather.forecast[0].icon;
            today12AMTemp.textContent = data.currentWeather.forecast[0].temperature;
            today3AMIcon.src = data.currentWeather.forecast[3].icon;
            today3AMTemp.textContent = data.currentWeather.forecast[3].temperature;
            today6AMIcon.src = data.currentWeather.forecast[6].icon;
            today6AMTemp.textContent = data.currentWeather.forecast[6].temperature;
            today9AMIcon.src = data.currentWeather.forecast[9].icon;
            today9AMTemp.textContent = data.currentWeather.forecast[9].temperature;
            today12PMIcon.src = data.currentWeather.forecast[12].icon;
            today12PMTemp.textContent = data.currentWeather.forecast[12].temperature;
            today3PMIcon.src = data.currentWeather.forecast[15].icon;
            today3PMTemp.textContent = data.currentWeather.forecast[15].temperature;
            today6PMIcon.src = data.currentWeather.forecast[18].icon;
            today6PMTemp.textContent = data.currentWeather.forecast[18].temperature;
            today9PMIcon.src = data.currentWeather.forecast[21].icon;
            today9PMTemp.textContent = data.currentWeather.forecast[21].temperature;

            tomorrowDate.textContent = data.tomorrowWeather.data;
            tomorrowIcon.src = data.tomorrowWeather.icon;
            tomorrowCondition.textContent = data.tomorrowWeather.condition;
            tomorrowTemp.textContent = data.tomorrowWeather.avgTemperature;
            tomorrowRain.textContent = data.tomorrowWeather.percipitation;
            tomorrowHigh.textContent = data.tomorrowWeather.maxTemperature;
            tomorrowLow.textContent = data.tomorrowWeather.minTemperature;

            dayAfterTmrwDate.textContent = data.dayAfterTomorrowWeather.date;
            dayAfterTmrwIcon.src = data.dayAfterTomorrowWeather.icon;
            dayAfterTmrwCondition.textContent = data.dayAfterTomorrowWeather.condition;
            dayAfterTmrwTemp.textContent = data.dayAfterTomorrowWeather.avgTemperature;
            dayAfterTmrwRain.textContent = data.dayAfterTomorrowWeather.percipitation;
            dayAfterTmrwHigh.textContent = data.dayAfterTomorrowWeather.maxTemperature;
            dayAfterTmrwLow.textContent = data.dayAfterTomorrowWeather.minTemperature;

        });


}

export { displayWeather }

