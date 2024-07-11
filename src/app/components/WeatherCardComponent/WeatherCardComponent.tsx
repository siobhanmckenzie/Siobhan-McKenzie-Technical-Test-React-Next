import React from 'react';
import * as Styled from './WeatherCardComponent.styled';
import { decodeWeatherCode } from '@/utils/weatherCodeDecoder';
import WeatherIcon from '../WeatherIconComponent/WeatherIconComponent';

interface WeatherData {
    weather_code: number;
    temperature_2m: number;
    apparent_temperature: number;
    precipitation: number;
}

interface Props {
    weather: WeatherData;
    variant?: "base" | "large";
    dayTitle?: string;
}

const WeatherCardComponent = ({ weather, variant = "large", dayTitle = "" }: Props) => {

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

                <p>Condition: {decodeWeatherCode(weather.weather_code)}</p>
                <p>Temperature: {weather.temperature_2m}°C</p>
                <p>Feels like: {weather.apparent_temperature}°C</p>
                <p>Precipitation: {weather.precipitation}mm</p>
            </div>


        </Styled.Container>
    );
};

export default WeatherCardComponent;
