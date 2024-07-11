// this is a manual bypass for the missing types

declare module 'weather-icons-react' {
    import * as React from 'react';

    export interface IconProps {
        size?: number;
        color?: string;
    }

    export const WiDaySunny: React.FC<IconProps>;
    export const WiAlien: React.FC<IconProps>;
    export const WiDayFog: React.FC<IconProps>;
    export const WiRainMix: React.FC<IconProps>;
    export const WiNightSnowWind: React.FC<IconProps>;
    export const WiDayRainMix: React.FC<IconProps>;
    export const WiDaySnow: React.FC<IconProps>;
    export const WiThunderstorm: React.FC<IconProps>;
    export const WiDayCloudy: React.FC<IconProps>;

}
