export interface Props {
    location: { latitude: number; longitude: number };
    onSetLocation: (latitude: number, longitude: number) => void;
}
