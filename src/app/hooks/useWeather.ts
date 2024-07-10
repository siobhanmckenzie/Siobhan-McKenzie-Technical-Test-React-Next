import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://api.open-meteo.com/v1/forecast';

const useWeather = (latitude: number, longitude: number) => {
    const [weather, setWeather] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchWeather = async () => {
            const params = {
                latitude,
                longitude,
                hourly: "temperature_2m",
            };
            try {
                const response = await axios.get(API_URL, { params });
                const data = response.data;

                const hourly = data.hourly;
                const weatherData = {
                    hourly: {
                        time: hourly.time.map((t: string) => new Date(t)),
                        temperature2m: hourly.temperature_2m,
                    },
                };

                setWeather(weatherData);
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
