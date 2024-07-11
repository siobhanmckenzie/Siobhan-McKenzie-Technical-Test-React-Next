import React from 'react';
import { useTheme } from 'styled-components';
import { WiDaySunny, WiDayCloudy, WiDayFog, WiRainMix, WiNightSnowWind, WiDayRainMix, WiDaySnow, WiThunderstorm } from 'weather-icons-react';

const WeatherIcon = ({ weatherCode }: Props) => {
    const theme = useTheme();

    switch (weatherCode) {
        case 0:
            return <WiDaySunny size={24} color={theme.colors.WHITE} />;
        case 1:
        case 2:
        case 3:
            return <WiDayCloudy size={24} color={theme.colors.BLACK} />;
        case 45:
        case 48:
            return <WiDayFog size={24} color={theme.colors.BLACK} />;
        case 51:
        case 53:
        case 55:
        case 56:
        case 57:
        case 61:
        case 63:
        case 65:
        case 66:
        case 67:
            return <WiRainMix size={24} color={theme.colors.BLACK} />;
        case 71:
        case 73:
        case 75:
        case 77:
            return <WiNightSnowWind size={24} color={theme.colors.BLACK} />;
        case 80:
        case 81:
        case 82:
            return <WiDayRainMix size={24} color={theme.colors.BLACK} />;
        case 85:
        case 86:
            return <WiDaySnow size={24} color={theme.colors.BLACK} />;
        case 95:
        case 96:
        case 99:
            return <WiThunderstorm size={24} color={theme.colors.BLACK} />;
        default:
            return null;
    }
};

export default WeatherIcon;
