import React from 'react';
import * as Styled from './WeatherCardComponent.styled';
import { getDecodedWeather } from '../../../utils/getDecodedWeather';
import WeatherIcon from '../WeatherIconComponent/WeatherIconComponent';
import { Props } from './WeatherCardComponent.props';

const WeatherCardComponent = ({ weather, variant = "large", dayTitle = "Today" }: Props) => {

    if (variant === "base") return (
        <Styled.MiniContainer>
            <h4>{dayTitle}</h4>
            <WeatherIcon weatherCode={weather.weather_code ?? 0} variant={variant} />
            <p>{weather.temperature_2m}°C</p>
        </Styled.MiniContainer>
    )
    return (
        <Styled.Container>

            {weather && <WeatherIcon weatherCode={weather.weather_code ?? 0} variant={variant} />}
            <div>
                <h2>Today</h2>
                <p>Condition: {getDecodedWeather(weather.weather_code)}</p>
                <p>Temperature: {weather.temperature_2m}°C</p>
                <p>Feels like: {weather.apparent_temperature}°C</p>
                <p>Rain: {weather.precipitation}mm</p>
            </div>


        </Styled.Container>
    );
};

export default WeatherCardComponent;
