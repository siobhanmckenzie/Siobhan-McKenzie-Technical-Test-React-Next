import { getWeatherEmoji } from "@/utils/useWeatherCodeEmoji";
import { useTheme } from "styled-components";

import * as Styled from './WeatherIconComponent.styled'
import { decodeWeatherCode } from "@/utils/weatherCodeDecoder";

interface Props {
    weatherCode: number;
    variant?: "base" | "large";
}

const WeatherIcon = ({ weatherCode, variant = "base" }: Props) => {
    const theme = useTheme();
    const emoji = getWeatherEmoji(weatherCode);

    return (
        <Styled.EmojiIcon
            aria-label={`current-weather-icon-${decodeWeatherCode(weatherCode)}`}
            color={theme.colors.WHITE}
            $variant={variant}
        >
            {emoji}
        </Styled.EmojiIcon>
    );
};

export default WeatherIcon;
