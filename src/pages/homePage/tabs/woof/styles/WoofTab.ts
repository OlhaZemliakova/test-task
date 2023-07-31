import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { LargeText } from 'Mixins/Font';
import theme from 'GlobalTheme';
import { PrimaryButton } from 'Mixins/Button';

export const WoofTabWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WoofTabSubtitle = styled(LargeText)`
    text-align: center;
    font-style: normal;
    font-size: 20px;
    font-weight: 800;
    margin-bottom: 63px;

    ${breakpoint('desktop')`
    font-size: 24px;
    line-height: 26px; 
    letter-spacing: -0.48px;
    font-weight: 900;
    margin-bottom: 100px;
`}
`;

export const WoofButton = styled(PrimaryButton)`
  max-width: 300px;
  width: 100%;
  padding: 13px 35px;

  ${breakpoint('desktop')`
    max-width: 350px;
    width: 100%;
    padding: 15px 41px;
  `}
`;