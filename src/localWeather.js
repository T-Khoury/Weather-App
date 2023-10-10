import { getWeatherData } from "./test";

async function createLocalWeather(apiData) {
    const weatherData = await apiData;
    const localWeather = {
        currentWeather: {
            location: {
                name: weatherData.location.name,
                region: weatherData.location.region,
                country: weatherData.location.country
            },
            condition: weatherData.current.condition.text,
            icon: `https:${weatherData.current.condition.icon}`,
            temperature: weatherData.current.temp_f,
            feelslike: weatherData.current.feelslike_f,
            humidity: weatherData.current.humidity,
            uv: weatherData.current.uv,
            windspeed: weatherData.current.wind_mph,
            percipitation: weatherData.forecast.forecastday[0].day.daily_chance_of_rain,
            forecast: {
                0: {
                    temperature: weatherData.forecast.forecastday[0].hour[0].temp_f,
                    icon: `https:${weatherData.forecast.forecastday[0].hour[0].condition.icon}`
                },
                3: {
                    temperature: weatherData.forecast.forecastday[0].hour[3].temp_f,
                    icon: `https:${weatherData.forecast.forecastday[0].hour[3].condition.icon}`
                },
                6: {
                    temperature: weatherData.forecast.forecastday[0].hour[6].temp_f,
                    icon: `https:${weatherData.forecast.forecastday[0].hour[6].condition.icon}`
                },
                9: {
                    temperature: weatherData.forecast.forecastday[0].hour[9].temp_f,
                    icon: `https:${weatherData.forecast.forecastday[0].hour[9].condition.icon}`
                },
                12: {
                    temperature: weatherData.forecast.forecastday[0].hour[12].temp_f,
                    icon: `https:${weatherData.forecast.forecastday[0].hour[12].condition.icon}`
                },
                15: {
                    temperature: weatherData.forecast.forecastday[0].hour[15].temp_f,
                    icon: `https:${weatherData.forecast.forecastday[0].hour[15].condition.icon}`
                },
                18: {
                    temperature: weatherData.forecast.forecastday[0].hour[18].temp_f,
                    icon: `https:${weatherData.forecast.forecastday[0].hour[18].condition.icon}`
                },
                21: {
                    temperature: weatherData.forecast.forecastday[0].hour[21].temp_f,
                    icon: `https:${weatherData.forecast.forecastday[0].hour[21].condition.icon}`
                }
            }
        },
        tomorrowWeather: {
            date: weatherData.forecast.forecastday[1].date,
            condition: weatherData.forecast.forecastday[1].day.condition.text,
            icon: `https:${weatherData.forecast.forecastday[1].day.condition.icon}`,
            percipitation: `Rain chance: ${weatherData.forecast.forecastday[1].day.daily_chance_of_rain} %`,
            avgTemperature: weatherData.forecast.forecastday[1].day.avgtemp_f,
            minTemperature: weatherData.forecast.forecastday[1].day.mintemp_f,
            maxTemperature: weatherData.forecast.forecastday[1].day.maxtemp_f
        },
        dayAfterTomorrowWeather: {
            date: weatherData.forecast.forecastday[2].date,
            condition: weatherData.forecast.forecastday[2].day.condition.text,
            icon: `https:${weatherData.forecast.forecastday[2].day.condition.icon}`,
            percipitation: `Rain chance: ${weatherData.forecast.forecastday[2].day.daily_chance_of_rain} %`,
            avgTemperature: weatherData.forecast.forecastday[2].day.avgtemp_f,
            minTemperature: weatherData.forecast.forecastday[2].day.mintemp_f,
            maxTemperature: weatherData.forecast.forecastday[2].day.maxtemp_f
        }
    };
    console.log(localWeather);
    return localWeather
};



export { createLocalWeather }

