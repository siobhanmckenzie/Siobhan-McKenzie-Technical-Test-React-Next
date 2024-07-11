
import styled, { css } from "styled-components"

const BaseStyles = css`
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.BLUE_MID};
    border: 4px solid ${({ theme }) => theme.colors.DARK_GREEN};
    color: ${({ theme }) => theme.colors.BLACK};
`

export const BaseContainer = styled.div`
    padding: 24px;
`

export const ResponsiveGridContainer = styled(BaseContainer)`
    display: grid;
    grid-template-columns: auto;
    justify-content: space-between;
    gap: 8px;
    @media only screen and (min-width: 400px) {
        grid-template-columns: auto auto;
        gap: 0;
    }
`


export const Container = styled(ResponsiveGridContainer)`
    ${BaseStyles}
    justify-content: space-evenly;
    gap: 24px;
    border: 4px solid ${({ theme }) => theme.colors.DARK_GREEN};
    margin: 24px;
`

export const MiniContainer = styled.div`
    ${BaseStyles}
    display: flex;
    flex-wrap: nowrap;
    gap: 8px;
    padding: 8px;
    align-items: center;
`
