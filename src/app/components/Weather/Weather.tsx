import React, { useCallback, useEffect, useState } from 'react';
import useWeather from '../../hooks/useWeather';
import * as Styled from './Weather.styled';
import { Props } from './Weather.props';
import { useForm, SubmitHandler } from "react-hook-form";
import useLocation from '@/app/hooks/useLocation';
import { LocationDialog } from '../LocationDialog';

type Inputs = { // react-hook-forms placeholder
    example: string,
    exampleRequired: string,
};

const Weather = () => {
    const { location, setLocation, permissionGranted } = useLocation();
    const [showDialog, setShowDialog] = useState<boolean>(false);
    const { weather, error, loading } = useWeather(location.latitude, location.longitude);

    useEffect(() => {
        if (permissionGranted === false) {
            setShowDialog(true);
        }
    }, [permissionGranted]);

    const handleSetLocation = useCallback((latitude: number, longitude: number) => {
        setLocation({ latitude, longitude });
        setShowDialog(false);
    }, [setLocation]);

    console.log("permissionGranted", permissionGranted)

    // start placeholdering an input field
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);


    if (loading) {
        return <WeatherSkeleton />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    // TODO: Add react hook form
    // TODO add context

    // Could add: translations

    return (
        <>
            <Styled.Container>

                <Styled.WeatherContainer>
                    {/* TODO: need to update this h1 content */}
                    <Styled.OffScreenHeader>Weather at your location</Styled.OffScreenHeader>
                    <Styled.TopDateSettingsContainer>
                        <Styled.H2>{new Date().toLocaleDateString('en-GB', { weekday: 'long' }).toUpperCase()}</Styled.H2>
                        {/* borrowed this off-screen header setup from https://www.metoffice.gov.uk/ */}
                        <Styled.CogIcon />
                    </Styled.TopDateSettingsContainer>
                    <Styled.MiddleDateLocationContainer>

                        <p>date swiper</p>
                        {showDialog && (
                            <LocationDialog location={location} onSetLocation={handleSetLocation} />
                        )}

                    </Styled.MiddleDateLocationContainer>
                    <h2>Weather at your location lat: {location.latitude} long: {location.longitude}</h2>
                    {/* {weather.hourly.time.map((time: Date, index: number) => (
                    <div key={index}>
                        <p>Time: {time.toISOString()}</p>
                        <p>Temperature: {weather.hourly.temperature2m[index]}°C</p>
                    </div>
                ))} */}
                </Styled.WeatherContainer>
            </Styled.Container>
        </>
    );
};

const WeatherSkeleton = () => {
    return (
        <Styled.Skeleton $width="400px" $height="600px" />
    )
}

export default Weather;
