
import { ResponsiveGridContainer } from "@/app/pages/WeatherPage/WeatherPage.styled"
import styled, { css } from "styled-components"

const BaseStyles = css`
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.BLUE_MID};
    border: 4px solid ${({ theme }) => theme.colors.DARK_GREEN};
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
