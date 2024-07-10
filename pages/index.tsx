
import { LocationDialog } from '@/app/components/LocationDialog';
import { Weather } from '@/app/components/Weather';
import useLocation from '@/app/hooks/useLocation';
import React, { useState, useEffect, useCallback } from 'react';

import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
`;

const Home: React.FC = () => {
    const { location, setLocation, permissionGranted } = useLocation();
    const [showDialog, setShowDialog] = useState<boolean>(false);

    useEffect(() => {
        if (permissionGranted === false) {
            setShowDialog(true);
        }
    }, [permissionGranted]);

    const handleSetLocation = useCallback((latitude: number, longitude: number) => {
        setLocation({ latitude, longitude });
        setShowDialog(false);
    }, [setLocation]);

    return (
        <Container>
            <Weather latitude={location.latitude} longitude={location.longitude} />
            {showDialog && (
                <LocationDialog location={location} onSetLocation={handleSetLocation} />
            )}
        </Container>
    );
};

export default Home;
