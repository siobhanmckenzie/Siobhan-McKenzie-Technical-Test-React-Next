import styled from "styled-components";

interface Props {
    color: string;
    $variant?: "base" | "large";
}

export const EmojiIcon = styled.span<Props>`
    font-size: ${({ $variant }) => $variant === "base" ? "24px" : "100px"};
    color: ${({ color }) => color};
`;
