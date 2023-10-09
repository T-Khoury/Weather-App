import { getWeatherData } from "./test";
import { createLocalWeather } from "./localWeather";
import { formHandler, weatherDisplayContainer } from "./dom";
import { selectors, displayWeather } from "./displayWeather";
import './styles.css';

weatherDisplayContainer();
formHandler();
