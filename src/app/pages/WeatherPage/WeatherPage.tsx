import React, { useMemo } from 'react';
import useWeather from '../../hooks/useWeather';
import * as Styled from './WeatherPage.styled';
import useLocation from '@/app/hooks/useLocation';
import { WeatherCardComponent } from '@/app/components/WeatherCardComponent';

const WeatherPage = () => {
    const { location, permissionGranted, reloadKey } = useLocation();
    const { weather, error, loading } = useWeather(location.latitude, location.longitude);

    const today = useMemo(() => new Date().toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    }), []);

    if (loading || !weather) {
        return <WeatherSkeleton />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const todaysWeather = {
        weather_code: weather.current.weather_code,
        temperature_2m: weather.current.temperature_2m,
        apparent_temperature: weather.current.apparent_temperature,
        precipitation: weather.current.precipitation,
    };

    const generateSpecificDaysWeather = (num: number) => {
        return {
            weather_code: weather.daily.weather_code[num],
            temperature_2m: weather.daily.temperature_2m_max[num],
        }
    }


    return (
        // the background will change depending on the weather - currently it switches between two options
        <Styled.Container key={reloadKey} $isFairWeather={[0, 1].includes(weather?.current.weather_code ?? 0)} >
            <Styled.WeatherContainer>

                <Styled.TopDateSettingsContainer>
                    <span>
                        <Styled.H1 aria-label={permissionGranted ? `Weather at your current location (Latitude: ${location.latitude}, Longitude: ${location.longitude})` : "Weather in London, default location due to permission not granted"}>Weather</Styled.H1>
                        <Styled.H2>{new Date().toLocaleDateString('en-GB', { weekday: 'long' }).toUpperCase()}</Styled.H2>
                    </span>
                </Styled.TopDateSettingsContainer>

                <Styled.MiddleDateLocationContainer>
                    <p>{today}</p>
                    <Styled.PinContainer>
                        <Styled.MapIcon />
                        {permissionGranted ?
                            <p>Your Current Location</p> :
                            <p>Default (London)</p>
                        }
                    </Styled.PinContainer>
                </Styled.MiddleDateLocationContainer>

                <WeatherCardComponent weather={todaysWeather} />

                <Styled.TitleContainer>
                    <Styled.H2>Your Next Few Days</Styled.H2>
                </Styled.TitleContainer>

                <Styled.ResponsiveGridContainer>
                    {[1, 2,].map((i) =>
                        <Styled.MiniCardContainer>
                            <WeatherCardComponent weather={generateSpecificDaysWeather(i)} variant="base" dayTitle={new Date(new Date().setDate(new Date().getDate() + i)).toLocaleDateString('en-GB', { weekday: 'short' }).toUpperCase()} />
                        </Styled.MiniCardContainer>
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

export default WeatherPage;
