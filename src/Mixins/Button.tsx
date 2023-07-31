import theme from "GlobalTheme";
import styled from "styled-components";
import { StandardFont } from "./Font";

export const Button = styled.button`
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

export const PrimaryButton = styled(Button)`
    background: ${theme.colours.neutral.dark};
    border: 3px solid ${theme.colours.neutral.dark};
    color: ${theme.colours.white};
`;

export const OutlineButton = styled(Button)`
    border: 3px solid ${theme.colours.black};
    color: ${theme.colours.neutral.dark};
`;