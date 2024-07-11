
export interface WeatherData {
    weather_code: number;
    temperature_2m: number;
    apparent_temperature?: number;
    precipitation?: number;
}

export interface Props {
    weather: WeatherData;
    variant?: "base" | "large";
    dayTitle?: string;
}
