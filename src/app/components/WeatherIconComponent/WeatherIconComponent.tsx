import { useTheme } from "styled-components";

import * as Styled from './WeatherIconComponent.styled'
import { getDecodedWeather } from "../../../utils/getDecodedWeather";
import { getWeatherEmoji } from "../../../utils/getWeatherEmoji";

interface Props {
    weatherCode: number;
    variant?: "base" | "large";
}

const WeatherIcon = ({ weatherCode, variant = "base" }: Props) => {
    const theme = useTheme();
    const emoji = getWeatherEmoji(weatherCode);

    return (
        <Styled.EmojiIcon
            aria-label={`Current Weather Icon ${getDecodedWeather(weatherCode)}`}
            color={theme.colors.WHITE}
            $variant={variant}
        >
            {emoji}
        </Styled.EmojiIcon>
    );
};

export default WeatherIcon;
