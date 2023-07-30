import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const TabsSwitchInner = styled.div<{
  marginBottom?: string;
  maxWidth?: string;
}>`
    display: flex;
    align-self: flex-start;
`;

export const WrapperTab = styled.div<{ isActive: boolean, backgroundColor: string, activeSvgColor: string, activeBorderColor: string }>`
  border: ${({ isActive }) => isActive ? '3px solid #000' : 'none'};
  border-radius: 10px;
  width: 90px;
  height: 90px;
  background: ${({ backgroundColor }) => backgroundColor};
  border: ${({ isActive, activeBorderColor }) => isActive ? `3px solid ${activeBorderColor}` : 'none'};
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  & svg path {
    stroke: ${({ isActive, activeSvgColor }) => isActive ? activeSvgColor : ''};
  }
`;

export const WrapperIcon = styled.div` 
  width: 50px;
  height: 50px;
  background: #FFFFFF;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconTitle = styled.h2<{ isActive: boolean, activeTitleColor: string }>`
  color: ${({ isActive, activeTitleColor }) => isActive ? activeTitleColor : '#FFFFFF'};
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 0;
`;
