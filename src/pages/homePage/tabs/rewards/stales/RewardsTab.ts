import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { LargeText, LargeFont, SmallHeading, StandardFont } from 'Mixins/Font';
import theme from 'GlobalTheme';

export const RewardsTabWrapper = styled(LargeText)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 300px;
    width: 100%;
`;

export const RewardsTabSubtitle = styled(LargeText)`
    text-align: center;
    font-style: normal;
    font-size: 20px;
    font-weight: 800;

    ${breakpoint('desktop')`
    font-size: 24px;
    line-height: 26px; 
    letter-spacing: -0.48px;
    font-weight: 900;
    margin-bottom: 8px;
`}
`;

export const RewardsTabImage = styled.img`
    width: 100px;
    height: 100px;
    margin-bottom: 2px;
`;

export const RewardsBones = styled(LargeFont)`
    color: ${theme.colours.secondary.dark};
    margin-bottom: 18px;
`;

export const RewardsDescription = styled(SmallHeading)`
    font-family: ${StandardFont};
    font-weight: 500;
    text-align: center;
    margin-bottom: 12px;

    ${breakpoint('desktop')`
        margin-bottom: 27px;
    `};
`;