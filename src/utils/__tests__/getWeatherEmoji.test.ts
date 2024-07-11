import { getWeatherEmoji } from "../getWeatherEmoji";

describe('getWeatherEmoji', () => {
    it('should return the correct emoji for a given weather code', () => {
        expect(getWeatherEmoji(0)).toBe('☀️'); // Clear sky
        expect(getWeatherEmoji(1)).toBe('🌤️'); // Mainly clear
        expect(getWeatherEmoji(2)).toBe('⛅'); // Partly cloudy
        expect(getWeatherEmoji(3)).toBe('☁️'); // Overcast
        expect(getWeatherEmoji(45)).toBe('🌫️'); // Fog
        expect(getWeatherEmoji(48)).toBe('🌫️'); // Depositing rime fog
        expect(getWeatherEmoji(51)).toBe('🌦️'); // Drizzle: Light
        expect(getWeatherEmoji(53)).toBe('🌦️'); // Drizzle: Moderate
        expect(getWeatherEmoji(55)).toBe('🌧️'); // Drizzle: Dense intensity
        expect(getWeatherEmoji(56)).toBe('🌧️'); // Freezing Drizzle: Light
        expect(getWeatherEmoji(57)).toBe('🌧️'); // Freezing Drizzle: Dense
        expect(getWeatherEmoji(61)).toBe('🌧️'); // Rain: Slight
        expect(getWeatherEmoji(63)).toBe('🌧️'); // Rain: Moderate
        expect(getWeatherEmoji(65)).toBe('🌧️'); // Rain: Heavy
        expect(getWeatherEmoji(66)).toBe('🌧️'); // Freezing Rain: Light
        expect(getWeatherEmoji(67)).toBe('🌧️'); // Freezing Rain: Heavy
        expect(getWeatherEmoji(71)).toBe('❄️'); // Snow fall: Slight
        expect(getWeatherEmoji(73)).toBe('❄️'); // Snow fall: Moderate
        expect(getWeatherEmoji(75)).toBe('❄️'); // Snow fall: Heavy
        expect(getWeatherEmoji(77)).toBe('❄️'); // Snow grains
        expect(getWeatherEmoji(80)).toBe('🌧️'); // Rain showers: Slight
        expect(getWeatherEmoji(81)).toBe('🌧️'); // Rain showers: Moderate
        expect(getWeatherEmoji(82)).toBe('🌧️'); // Rain showers: Violent
        expect(getWeatherEmoji(85)).toBe('❄️'); // Snow showers: Slight
        expect(getWeatherEmoji(86)).toBe('❄️'); // Snow showers: Heavy
        expect(getWeatherEmoji(95)).toBe('⛈️'); // Thunderstorm: Slight or moderate
        expect(getWeatherEmoji(96)).toBe('⛈️'); // Thunderstorm with slight hail
        expect(getWeatherEmoji(99)).toBe('⛈️'); // Thunderstorm with heavy hail
    });

    it('should return the fallback emoji for an unknown weather code', () => {
        expect(getWeatherEmoji(999)).toBe('x');
    });
});
