import theme from '@/app/theme';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    // override default page styles coming from the browser
    body {
        margin: 0;
        padding: 0;
    }
`;

const MyApp = ({ Component, pageProps }: AppProps) => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
    </ThemeProvider>
);

export default MyApp;
