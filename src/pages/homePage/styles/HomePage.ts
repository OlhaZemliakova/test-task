import theme from 'GlobalTheme';
import { OutlineButton } from 'Mixins/Button';
import { LargeText, StandardFont } from 'Mixins/Font';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { optional } from 'utils/styledComponents';

export const HomePageWrapper = styled.div`
  flex: 1;
  flex-direction: column;
  height: 100%;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
`;

export const HomePageTabWrapper = styled.div<{
  someOption?: string
  // You can add options here
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colours.white};
  border-radius: 10px;
  min-height: 50%;
  margin-bottom: 24px;

  ${breakpoint('mobile')`
    width: 100%;
    max-width: 350px;
    padding: 30px 25px 12px;
    min-height: 41%;
    margin-bottom: 70px;
  `}

  ${breakpoint('tablet')`
    width: 100%;
    max-width: 900px;
    padding-top: 17px;
    padding-bottom: 27px;
    min-height: 50%;
    margin-bottom: 24px;
  `}

`;

export const HomePageTitle = styled(LargeText)`
  font-weight: 600;
  margin-bottom: 11px;
  align-self: flex-start;

  ${breakpoint('desktop')`
    margin-top: 18px;
  `}
`;

export const LogoutButton = styled(OutlineButton)`
  
`;
