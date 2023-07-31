import theme from "GlobalTheme";
import styled from "styled-components";
import { StandardFont } from "./Font";

export const Button = styled.button<{ $outline?: boolean; }>`
    background: ${props => props.$outline ? "transparent" : theme.colours.neutral.dark};
    border-color: ${props => props.$outline ? theme.colours.black : theme.colours.neutral.dark};
    color: ${props => props.$outline ? theme.colours.neutral.dark : theme.colours.white};
    border: 3px solid;
    display: block;
    font-family: ${StandardFont};
    font-size: 20px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    border-radius: 65px;
    padding: 15px 41px;
    max-width: 350px;
    width: 100%;
    cursor: poiner;
`;