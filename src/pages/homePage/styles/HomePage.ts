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
  min-height: 60%;

  ${breakpoint('mobile')`
    width: 100%;
    max-width: 350px;
    padding: 24px 24px;
  `}

  ${breakpoint('tablet')`
    width: 100%;
    max-width: 900px;
    padding: 48px 24px;
  `}

`;

export const Button = styled.button<{
  textAlign?: string;
  alignSelf?: string;
  color?: string;
}>`
  color: #0F1B2D;
  padding: 15px 41px;
  border: 3px solid #000;
  border-radius: 65px;
  display: block;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  max-width: 350px;
  width: 100%;
  cursor: poiner;
  margin-top: 70px;

  ${breakpoint('tablet')`
  margin-top: 50px;
  `}

  ${breakpoint('desktop')`
  margin-top: 24px;
  `}

`;
