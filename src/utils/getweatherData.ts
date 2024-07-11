
interface WeatherData {
    weather_code: number;
    temperature_2m: number;
    apparent_temperature: number;
    precipitation: number;
}

export const getWeatherData = (weather: any, dayIndex: number): WeatherData => {
    if (dayIndex === 0) {
        return {
            weather_code: weather.current.weather_code,
            temperature_2m: weather.current.temperature_2m,
            apparent_temperature: weather.current.apparent_temperature,
            precipitation: weather.current.precipitation,
        };
    }

    return {
        weather_code: weather.daily.weather_code[dayIndex],
        temperature_2m: weather.daily.temperature_2m_max[dayIndex],
        apparent_temperature: weather.daily.temperature_2m_min[dayIndex],
        precipitation: weather.daily.precipitation_sum[dayIndex],
    };
};
