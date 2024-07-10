
import { Weather } from '@/app/components/Weather';
import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
`;

const Home = () => {

    return (
        <Container>
            <Weather />
        </Container>
    );
};

export default Home;
