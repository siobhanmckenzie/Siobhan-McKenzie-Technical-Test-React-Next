import styled from "styled-components";

export const WeatherContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background: ${({ theme }) => theme.colors.CYAN_MEDIUM};
    color: ${({ theme }) => theme.colors.WHITE};
    border-radius: 10px;
    margin-top: 2rem;
    width: 100%;
    max-width: 400px;
`;