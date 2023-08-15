import { LargeText, SmallHeading, StandardFont, LargeHeading } from 'Mixins/Font';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import theme from 'GlobalTheme';

export const AccountTabWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 503px
  width: 100%;
`;

export const AccountTabSubtitle = styled(LargeText)`
  text-align: center;
  margin-bottom: 12px;
  font-size: 20px;
  font-weight: 800;
  max-width: 280px;
  width: 100%;

  ${breakpoint('desktop')`
    font-size: 24px;
    line-height: 26px; 
    letter-spacing: -0.48px;
    font-weight: 900;
    margin-bottom: 8px;
    max-width: 100%;
  `}
`;

export const AccountTabImageWrapper = styled.img`
  height: 75px;
  width: 75px;
  ${breakpoint('desktop')`
  height: 100px;
  width: 100px;
  margin-bottom: 8px;
  `}
`;

export const AccountBalanceText = styled(LargeHeading)`
  text-align: center;
  font-family: ${StandardFont};
  font-size: 45px;
  font-weight: 900;
  line-height: 50px;
  letter-spacing: -0.9px;
  color: ${theme.colours.primary.dark};
`;

export const CurrencyLabel = styled(SmallHeading)`
  margin-bottom: 23px;
  font-family: ${StandardFont};
  font-size: 20px;
  font-weight: 500;

${breakpoint('desktop')`
  margin-bottom: 15px;
  `}
`;

export const AccountStatus = styled(SmallHeading)`
  font-weight: 500;
  margin-bottom: 7px;
  font-family: ${StandardFont};

    ${breakpoint('desktop')`
      margin-bottom: 15px;
      `}
`;

export const AccountTabLabel = styled.div`
  background-color:${({ theme }) => theme.colours.primary.light};
  border-radius: 35px;
  padding: 6px 24px;
  max-width: 200px;
  width: 100%;
  text-align: center;
`;

export const AccountTabLabelText = styled(SmallHeading)`
  color: ${theme.colours.primary.dark};
  font-weight: 700;
  font-family: ${StandardFont};
`;