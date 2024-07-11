import React, { useCallback, useEffect, useMemo, useState } from 'react';
import useWeather from '../../hooks/useWeather';
import * as Styled from './Weather.styled';
import useLocation from '@/app/hooks/useLocation';
import { decodeWeatherCode } from '@/utils/weatherCodeDecoder';
import WeatherIcon from '../WeatherIconComponent/WeatherIconComponent';


const Weather = () => {
    const { location, permissionGranted, reloadKey } = useLocation();
    const { weather, error, loading } = useWeather(location.latitude, location.longitude);

    console.log(weather);

    // TODO: refactor this inside the useWeather look

    const today = useMemo(() => new Date().toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    }), []);

    if (loading) {
        return <WeatherSkeleton />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    // Could add translations
    // TODO: accessibility

    return (
        <Styled.Container key={reloadKey} $isFairWeather={[0, 1].includes(weather?.current.weather_code ?? 0)} >
            <Styled.WeatherContainer>
                <Styled.TopDateSettingsContainer>
                    <span>
                        <Styled.H1 aria-label={permissionGranted ? `Weather at your current location (Latitude: ${location.latitude}, Longitude: ${location.longitude})` : "Weather in London, default location due to permission not granted"}>Weather</Styled.H1>
                        <Styled.H2>{new Date().toLocaleDateString('en-GB', { weekday: 'long' }).toUpperCase()}</Styled.H2>
                    </span>
                    {/*  TODO: Address page reload */}


                </Styled.TopDateSettingsContainer>
                <Styled.MiddleDateLocationContainer>
                    <p>{today}</p>
                    <Styled.PinContainer>
                        <Styled.MapIcon />
                        {permissionGranted ?
                            <p>Your Location</p> :
                            <p>Default</p>
                        }

                        {/* // I didn't implement translating the co-ordinates into a named location */}
                    </Styled.PinContainer>
                </Styled.MiddleDateLocationContainer>

                {/* TODO: refactor into a card */}

                <Styled.WeatherResponsiveContainer>
                    <WeatherIcon weatherCode={weather?.current.weather_code ?? 0} variant="large" />
                    {weather?.current ? (
                        <div>
                            <p>Condition: {decodeWeatherCode(weather.current.weather_code)}</p>
                            <p>Temperature: {weather.current.temperature_2m}°C</p>
                            <p>Feels like: {weather.current.apparent_temperature}°C</p>
                            <p>Precipitation: {weather.current.precipitation}mm</p>
                        </div>
                    ) : (
                        <p>No data available</p>
                    )}
                </Styled.WeatherResponsiveContainer>
            </Styled.WeatherContainer>
        </Styled.Container>
    );
};

const WeatherSkeleton = () => {
    return (
        <Styled.Skeleton $width="400px" $height="600px" />
    );
};

export default Weather;
