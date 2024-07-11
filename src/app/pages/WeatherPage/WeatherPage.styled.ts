import styled, { keyframes } from 'styled-components';
import { MapPinIcon as HeroMapIcon } from '@heroicons/react/24/solid'

interface SkeletonProps {
    $width?: string;
    $height?: string;
}

const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

export const Skeleton = styled.div<SkeletonProps>`
  width: ${({ $width }) => $width || '100%'};
  height: ${({ $height }) => $height || '100%'};
  background: #f6f7f8;
  background-image: linear-gradient(to right, #eeeeee 0%, #dddddd 50%, #eeeeee 100%);
  background-repeat: no-repeat;
  background-size: 1000px 100%;
  animation: ${shimmer} 2s infinite;
  border-radius: 4px;
`;

interface Props {
    $isFairWeather?: boolean;
}
// TODO: Conditionally display background based on precipitation / other props
export const Container = styled.div<Props>`
    display: flex;
    flex-wrap: nowrap;
    grid-template-columns: 1fr;
    background-image: url(${({ $isFairWeather }) => $isFairWeather ? '/images/fair-unsplash-licensed.jpg' : '/images/poor-unsplash-licensed.jpg'});
    background-position: center center;
    background-size: cover;
    // Not shorthanded for readability
    justify-content: center;
    height: 100%;
`

export const WeatherContainer = styled.div`
    display: grid;
    grid-template-rows: auto;
    gap: 8px;
    align-content: start;

    // align-items: center;
    // justify-content: space-between;
    // padding: 16px;
    margin: 32px 16px;
    background: ${({ theme }) => theme.colors.CYAN_MEDIUM_80};
    color: ${({ theme }) => theme.colors.WHITE};
    border-radius: 10px;
    width: 100%;

    @media only screen and (min-width: 600px) {
        width: 400px;
        margin: 32px 0;

    }

`;

export const BaseContainer = styled.div`
    padding: 24px;
`

export const ResponsiveGridContainer = styled(BaseContainer)`
    display: grid;
    grid-template-columns: auto;
    justify-content: space-between;
    @media only screen and (min-width: 400px) {
        grid-template-columns: auto auto;
    }
`

export const WeatherResponsiveContainer = styled(ResponsiveGridContainer)`
    justify-content: space-evenly;
    gap: 24px;
    border: 4px solid ${({ theme }) => theme.colors.DARK_GREEN};
    margin: 24px;
    border-radius: 20px;
`


export const PinContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    gap: 12px;
}
    `

export const TopDateSettingsContainer = styled(ResponsiveGridContainer)`
    padding-top: 32px;
    align-items: flex-start;
`

export const MiddleDateLocationContainer = styled(ResponsiveGridContainer)`
    padding: 8px 24px;
    background-color: ${({ theme }) => theme.colors.CYAN_MEDIUM};
`

export const H1 = styled.h2`
    font-size: 18px;
    margin: 0;
`

export const H2 = styled.h2`
    font-size: 38px;
    margin: 0;
`

export const MapIcon = styled(HeroMapIcon)`
    color: ${({ theme }) => theme.colors.WHITE};
    width: 18px;
`