import { MainLayout } from "../Layouts";
import { useState, useEffect } from "react";
import { Banner } from "../Components/Banner";
import WeatherBanner from "../imgs/weather/local-weather.png";

import WeatherService from "../Services/WeatherService";

const initWeather = {
    feels_like: "",
    humidity: "",
    pressure: "",
    temp: "",
    temp_min: "",
    temp_max: "",
    name: "",
    country: "",
    speed: "",
    visibility: "",
    main: "",
    description: "",
    icon: "",
};

const WeatherPage = () => {
    const [weather, setWeather] = useState(initWeather);
    const [error, setError] = useState(false);
    const [place, setPlace] = useState("Sofia");
    const weatherIconsUrl = "https://openweathermap.org/img/w/";
    const weatherIconType = ".png";

    const getWeather = async () => {
        const weatherData = await WeatherService.getWeatherInPlace(place);

        if (weatherData) {
            setWeather(weatherData);
            setError(false);
        } else {
            setWeather(initWeather);
            setError(true);
        }
    };

    useEffect(() => {
        getWeather();
    }, []);

    const onPlaceChange = ({ target: { value } }) => {
        setPlace(value);
    };

    const handleSubmit = () => {
        getWeather();
    };

    return (
        <MainLayout>
            <h1>Check Weather</h1>
            <div className="row">
                {error && (
                    <div className="col-12">
                        <div className="msg error-msg">Place is not found</div>
                    </div>
                )}

                <div className="col-12 col-md-3 col-sm-6">
                    <div className="form weather-form">
                        <div className="form__row">
                            <label
                                htmlFor="search-weather-by-place"
                                className="form__label"
                            >
                                Type Place
                            </label>
                            <div className="form__field">
                                <input
                                    type="text"
                                    id="search-weather-by-place"
                                    className="form__input"
                                    value={place}
                                    name="place"
                                    onChange={onPlaceChange}
                                />
                            </div>
                        </div>
                        <div className="form__row">
                            <button
                                className="button button-primary form__button"
                                onClick={handleSubmit}
                            >
                                Get Weather
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                {!error && (
                    <div className="col-12 col-sm-6">
                        <div className="weather">
                            <div className="weather__city">{weather.name}</div>
                            <p className="weather__title">Current weather</p>
                            <div className="weather__temperature">
                                {weather.icon && (
                                    <div className="weather__icon-wrapper">
                                        <img
                                            className="weather__icon"
                                            src={`${weatherIconsUrl}${weather.icon}${weatherIconType}`}
                                            alt="Weather Icon"
                                        />
                                    </div>
                                )}
                                <div
                                    className={`weather__current-temp ${
                                        weather.temp
                                            ? weather.temp > 20
                                                ? "hot-temp"
                                                : "cold-temp"
                                            : ""
                                    }`}
                                >
                                    {weather.temp}{" "}
                                    <span className="weather__unit">
                                        &#176;C
                                    </span>
                                </div>
                            </div>
                            <div className="weather__description-wrapper">
                                <p className="weather__description">
                                    {weather.description}
                                </p>
                                <p className="weather__feals-like">
                                    Feels like:{" "}
                                    <span
                                        className={`${
                                            weather.temp
                                                ? weather.feels_like > 20
                                                    ? "hot-temp"
                                                    : "cold-temp"
                                                : ""
                                        }`}
                                    >
                                        {weather.feels_like}{" "}
                                        <span className="weather__unit">
                                            &#176;C
                                        </span>
                                    </span>
                                </p>
                            </div>
                            <div className="weather__info">
                                <ul className="weather__items">
                                    <li>
                                        <span className="icon icon-30 humidity-icon"></span>
                                        <span className="weather__stat">
                                            {weather.humidity} %
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon icon-30 visibility-icon"></span>
                                        <span className="weather__stat">
                                            {weather.visibility} m
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon icon-30 temp-icon"></span>
                                        <span className="weather__stat cold-temp">
                                            {weather.temp_min} &#176;
                                        </span>
                                        <span className="separator">/</span>
                                        <span className="weather__stat hot-temp">
                                            {weather.temp_max} &#176;C
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon icon-30 pressure-icon"></span>
                                        <span className="weather__stat">
                                            {weather.pressure} hPa
                                        </span>
                                    </li>
                                    <li>
                                        <span className="icon icon-30 wind-icon"></span>
                                        <span className="weeather__stat">
                                            {weather.speed} m/s
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
                <div className="col-12 col-sm-6">
                    <Banner
                        bannerImgSrc={WeatherBanner}
                        bannerImgAlt="Weather Banner"
                        bannerImgTitle="Weather Banner"
                    />
                </div>
            </div>
        </MainLayout>
    );
};

export default WeatherPage;
