const getWeatherApiLink = (place) => {
    return `${process.env.REACT_APP_WEATHER_API_URL}${place}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
};

const getWeatherInPlace = async (place) => {
    const weatherLink = getWeatherApiLink(place);

    try {
        const result = await fetch(weatherLink);

        const {
            main: { feels_like, humidity, pressure, temp, temp_min, temp_max },
            name,
            sys: { country },
            visibility,
            wind: { speed },
            weather: [{ main, description, icon }],
        } = await result.json();

        return {
            feels_like,
            humidity,
            pressure,
            temp,
            temp_min,
            temp_max,
            name,
            country,
            visibility,
            speed,
            main,
            description,
            icon,
        };
    } catch (e) {
        return false;
    }
};

const WeatherService = {
    getWeatherInPlace,
};

export default WeatherService;
