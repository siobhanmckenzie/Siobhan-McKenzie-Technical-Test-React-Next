import React, { useCallback, useEffect, useMemo, useState } from 'react';
import useWeather from '../../hooks/useWeather';
import * as Styled from './Weather.styled';
import useLocation from '@/app/hooks/useLocation';
import { decodeWeatherCode } from '@/utils/weatherCodeDecoder';


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
        <Styled.Container key={reloadKey} $isFairWeather={[0, 1, 2, 3].includes(weather?.current.weather_code ?? 0)} >
            <Styled.WeatherContainer>

                <Styled.TopDateSettingsContainer>
                    <span>
                        <Styled.H2>{new Date().toLocaleDateString('en-GB', { weekday: 'long' }).toUpperCase()}</Styled.H2>

                        {/*  TODO: Address page reload */}
                        {!permissionGranted &&
                            <p>You haven't set your location, so your default location is set to London</p>
                        }
                    </span>
                </Styled.TopDateSettingsContainer>
                <Styled.MiddleDateLocationContainer>
                    <p>{today}</p>
                </Styled.MiddleDateLocationContainer>

                {/* TODO: refactor into a card */}

                <Styled.ResponsiveGridContainer>
                    <span>
                        <h1 aria-label={permissionGranted ? `Weather at your current location (Latitude: ${location.latitude}, Longitude: ${location.longitude})` : "Weather in London, default location due to permission not granted"}>Weather</h1>
                        {/* <WeatherIconComponent weatherCode={weather?.current.weather_code ?? 0} /> */}

                    </span>
                    {weather?.current ? (
                        <div>
                            <p>Time: {new Date(weather.current.time).toLocaleString()}</p>
                            <p>Condition: {decodeWeatherCode(weather.current.weather_code)}</p>
                            <p>Temperature: {weather.current.temperature_2m}°C</p>
                            <p>Feels like: {weather.current.apparent_temperature}°C</p>
                            <p>Precipitation: {weather.current.precipitation}mm</p>
                        </div>
                    ) : (
                        <p>No data available</p>
                    )}
                </Styled.ResponsiveGridContainer>
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
