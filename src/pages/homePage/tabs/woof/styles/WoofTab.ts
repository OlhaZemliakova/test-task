import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { LargeText } from 'Mixins/Font';
import { Button } from 'pages/homePage/styles/HomePage';
import theme from 'GlobalTheme';

export const WoofTabSubtitle = styled(LargeText)`
    text-align: center;
    font-style: normal;
    font-size: 20px;
    font-weight: 800;

    ${breakpoint('desktop')`
    font-size: 24px;
    line-height: 26px; 
    letter-spacing: -0.48px;
    font-weight: 900;
`}
`;

export const WoofButton = styled(Button)`
  max-width: 300px;
  width: 100%;
  background: ${theme.colours.neutral.dark};
  padding: 13px 35px;
  border-color: ${theme.colours.neutral.dark};
  color: ${theme.colours.white};

  ${breakpoint('desktop')`
    max-width: 350px;
    padding: 15px 41px;
  `}
`;