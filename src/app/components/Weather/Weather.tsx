import React from 'react';
import useWeather from '../../hooks/useWeather';
import * as Styled from './Weather.styled';
import { Props } from './Weather.props';

const Weather: React.FC<Props> = ({ latitude, longitude }) => {
    const { weather, error } = useWeather(latitude, longitude);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!weather) {
        return <div>Loading...</div>;
    }

    return (
        <Styled.WeatherContainer>
            <h1>Weather at your location lat: {latitude} long: {longitude}</h1>
            {weather.hourly.time.map((time: Date, index: number) => (
                <div key={index}>
                    <p>Time: {time.toISOString()}</p>
                    <p>Temperature: {weather.hourly.temperature2m[index]}°C</p>
                </div>
            ))}
        </Styled.WeatherContainer>
    );
};

export default Weather;
