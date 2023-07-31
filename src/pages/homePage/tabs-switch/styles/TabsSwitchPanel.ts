import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import theme from "GlobalTheme";
import { SmallText } from 'Mixins/Font';

export const TabsSwitchInner = styled.div<{
  marginBottom?: string;
  maxWidth?: string;
}>`
    display: flex;
    align-self: flex-start;
`;

export const WrapperTab = styled.div<{ isActive: boolean, backgroundColor: string, activeSvgColor: string, activeBorderColor: string }>`
  border-radius: 10px;
  width: 90px;
  height: 90px;
  background: ${({ backgroundColor }) => backgroundColor};
  border: ${({ isActive, activeBorderColor }) => isActive ? `3px solid ${activeBorderColor}` : 'none'};
  margin-right: 17px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  & svg path {
    stroke: ${({ isActive, activeSvgColor }) => isActive ? activeSvgColor : ''};
  }

  ${breakpoint('desktop')`
    margin-right: 21px;
  `}
`;

export const WrapperIcon = styled.div` 
  width: 50px;
  height: 50px;
  background: ${(theme.colours.white)};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconTitle = styled(SmallText)<{ isActive: boolean, activeTitleColor: string }>`
color: ${({ isActive, activeTitleColor }) => isActive ? activeTitleColor : theme.colours.white};
  font-weight: 700;
`;