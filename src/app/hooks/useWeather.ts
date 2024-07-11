import { useState, useEffect } from 'react';
import axios from 'axios';
import { WeatherData } from '../pages/WeatherPage/Weather.types';

const API_URL = 'https://api.open-meteo.com/v1/forecast';

// todo: add props interface

const useWeather = (latitude: number, longitude: number) => {
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchWeather = async () => {
            const params = {
                latitude,
                longitude,
                current: ["temperature_2m", "apparent_temperature", "precipitation", "weather_code"],
                daily: ["weather_code", "temperature_2m_max", "temperature_2m_min", "precipitation_sum", "precipitation_probability_max"],
                timezone: "Europe/London",
                past_days: 0,
            };

            try {
                const response = await axios.get(API_URL, { params });

                const data = response.data;


                setWeather(data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
                setError('Error fetching weather data');
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();
    }, [latitude, longitude]);

    return { weather, error, loading };
};

export default useWeather;
