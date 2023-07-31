import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { LargeText, HugeText, SmallText } from 'Mixins/Font';
import theme from 'GlobalTheme';

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

export const RewardsBones = styled(HugeText)`
    color: ${theme.colours.secondary.dark};
    font-weight: 900;
    margin-bottom: 18px;
`;

export const RewardsDescription = styled(SmallText)`
    font-weight: 500;
    text-align: center;
    max-width: 303px;
    width: 100%;
    margin-bottom: 12px;

    ${breakpoint('desktop')`
        margin-bottom: 27px;
    `};
`;