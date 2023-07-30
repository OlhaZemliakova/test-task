import { SmallText, SmallHeading } from 'Mixins/Font';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const AccountTabWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 503px
  width: 100%;
`;

export const AccountTabImageWrapper = styled.img`
  height: 75px;
  width: 75px;
  margin-bottom: 8px;
  ${breakpoint('desktop')`
  height: 100px;
  width: 100px;
  `}
`;

export const CurrencyLabel = styled(SmallHeading)`
margin-bottom: 23px;
font-weight: 500;
${breakpoint('desktop')`
  font-size: 20px;
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