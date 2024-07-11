/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import WeatherCardComponent from '../WeatherCardComponent';
import { ThemeProvider } from 'styled-components';
import { mockTheme } from '../../../../test-utils/mockTheme';

jest.mock('../../WeatherIconComponent', () => {
  return ({ weatherCode }: { weatherCode: number }) => (
    <div data-testid="weather-icon">{`Weather Icon for code ${weatherCode}`}</div>
  );
});

jest.mock('../../../../utils/getDecodedWeather', () => ({
  getDecodedWeather: jest.fn((code) => `Weather description for code ${code}`)
}));

const mockWeatherData = {
  weather_code: 3,
  temperature_2m: 18.9,
  apparent_temperature: 18.4,
  precipitation: 0
};

describe('WeatherCardComponent', () => {
  const renderWithTheme = (component: React.ReactElement) => {
    return render(<ThemeProvider theme={mockTheme}>{component}</ThemeProvider>);
  };

  test('renders correctly with base variant', () => {
    renderWithTheme(<WeatherCardComponent weather={mockWeatherData} variant="base" dayTitle="Tomorrow" />);

    expect(screen.getByText('Tomorrow')).toBeTruthy(); // substitute for toBeInTheDocuments - project config needs a tweak
    expect(screen.getByText('18.9°C')).toBeTruthy();
  });

  test('renders correctly with large variant', () => {
    renderWithTheme(<WeatherCardComponent weather={mockWeatherData} variant="large" dayTitle="Today" />);

    expect(screen.getByText('Today')).toBeTruthy();
    expect(screen.getByText('Condition: Weather description for code 3')).toBeTruthy();
    expect(screen.getByText('Temperature: 18.9°C')).toBeTruthy();
    expect(screen.getByText('Feels like: 18.4°C')).toBeTruthy();
    expect(screen.getByText('Rain: 0mm')).toBeTruthy();
  });
});
