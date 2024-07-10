import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background: ${({ theme }) => theme.colors.BLUE_LIGHT};
    margin-top: 2rem;
    width: 100%;
    max-width: 400px;
    padding: 0;
    margin: 0;
    color: ${({ theme }) => theme.colors.TEXT};
`;

export const Input = styled.input`
    padding: 0.5rem;
    margin: 0.5rem 0;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.colors.CYAN_MEDIUM};
    width: fit-content;
`;

export const Button = styled.button`
    padding: 0.5rem 1rem;
    margin: 0.5rem;
    border: none;
    border-radius: 5px;
    background: ${({ theme }) => theme.colors.CYAN_MEDIUM};
    color: ${({ theme }) => theme.colors.WHITE};
    cursor: pointer;

    &:hover {
        background: ${({ theme }) => theme.colors.CYAN_MID};
    }
`;
