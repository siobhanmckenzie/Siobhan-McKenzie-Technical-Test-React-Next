import { useState, useEffect, useCallback, useMemo } from 'react';

interface Location {
    latitude: number;
    longitude: number;
}

const defaultLocation: Location = {
    latitude: 51.5074, // London fallback
    longitude: -0.1278
};

const useLocation = () => {
    const [location, setLocation] = useState<Location>(defaultLocation);
    const [error, setError] = useState<string | null>(null);
    const [permissionGranted, setPermissionGranted] = useState<boolean | null>(null);

    const getCurrentPosition = useCallback(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    });
                    setPermissionGranted(true);
                },
                (err) => {
                    setError('Unable to retrieve location');
                    console.error('Error getting location:', err);
                    setPermissionGranted(false);
                }
            );
        } else {
            setError('Geolocation is not supported by this browser');
            setPermissionGranted(false);
        }
    }, []);

    useEffect(() => {
        getCurrentPosition();
    }, [getCurrentPosition]);

    const memoisedLocation = useMemo(() => location, [location]);

    return { location: memoisedLocation, setLocation, error, permissionGranted };
};

export default useLocation;
