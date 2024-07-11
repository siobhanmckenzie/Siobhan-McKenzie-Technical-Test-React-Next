interface CurrentWeather {
    apparent_temperature: number;
    interval: number;
    precipitation: number;
    temperature_2m: number;
    time: string;
    weather_code: number;
}

interface CurrentUnits {
    time: string;
    interval: string;
    temperature_2m: string;
    apparent_temperature: string;
    precipitation: string;
    weather_code: string;
}

interface DailyWeather {
    precipitation_probability_max: number[];
    precipitation_sum: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    time: string[];
    weather_code: number[];
}

interface DailyUnits {
    time: string;
    weather_code: string;
    temperature_2m_max: string;
    temperature_2m_min: string;
    precipitation_sum: string;
    precipitation_probability_max: string;
}

export interface WeatherData {
    current: CurrentWeather;
    current_units: CurrentUnits;
    daily: DailyWeather;
    daily_units: DailyUnits;
    elevation: number;
    generationtime_ms: number;
    latitude: number;
    longitude: number;
    timezone: string;
    timezone_abbreviation: string;
    utc_offset_seconds: number;
}
