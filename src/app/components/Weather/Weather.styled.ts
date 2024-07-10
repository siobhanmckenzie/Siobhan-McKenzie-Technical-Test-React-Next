import styled, { keyframes } from 'styled-components';
import { Cog8ToothIcon as HeroCogIcon } from "@heroicons/react/24/solid";

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

// TODO: Conditionally display background based on precipitation / other props
export const Container = styled.div`
    display: flex;
    flex-wrap: nowrap;
    grid-template-columns: 1fr;
    background-image: url('/images/fair-unsplash-licensed.jpg');
    background-position: center center;
    background-size: cover;
    // Not shorthanded for readability
    justify-content: center;
    height: 100%;
`

export const OffScreenHeader = styled.h1`
    position: absolute;
    left: -100000px;
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

export const TopDateSettingsContainer = styled(ResponsiveGridContainer)`
    padding-top: 32px;
    align-items: center;
`

export const MiddleDateLocationContainer = styled(ResponsiveGridContainer)`
    padding: 8px 24px;
    background-color: ${({ theme }) => theme.colors.CYAN_MEDIUM};
`

export const H2 = styled.h2`
    font-size: 38px;
    margin: 0;
`

export const CogIcon = styled(HeroCogIcon)`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.colors.WHITE};
  cursor: pointer;

`;