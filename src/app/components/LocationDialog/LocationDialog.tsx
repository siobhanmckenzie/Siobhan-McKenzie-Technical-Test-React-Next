import React, { useEffect, useRef, useState } from 'react';
import * as Styled from './LocationDialog.styled'
import { Props } from './LocationDialog.props';


const LocationDialog: React.FC<Props> = ({ location, onSetLocation }) => {
    const [latitude, setLatitude] = useState<string>(location.latitude.toString());
    const [longitude, setLongitude] = useState<string>(location.longitude.toString());
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (!navigator.geolocation) {
            inputRef.current?.focus();
        }
    }, []);

    const handleSetLocation = () => {
        const lat = parseFloat(latitude);
        const lon = parseFloat(longitude);
        if (!isNaN(lat) && !isNaN(lon)) {
            onSetLocation(lat, lon);
        }
    };

    return (
        <Styled.DialogContainer>
            <h1>Enter Location</h1>
            <Styled.Input
                ref={inputRef}
                type="text"
                placeholder="Please input a location"
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
            />
            <Styled.Input
                type="text"
                placeholder="Longitude"
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
            />
            <Styled.Button onClick={handleSetLocation}>Set Location</Styled.Button>
        </Styled.DialogContainer>
    );
};

export default LocationDialog;
