import theme from "GlobalTheme";
import styled from "styled-components";
import breakpoint from 'styled-components-breakpoint';
import { optional } from "utils/styledComponents";

export const StandardFont = `'Poppins', sans-serif`;
export const MediumFont = `'Poppins-Medium', sans-serif`;
export const SemiBoldFont = `'Poppins-SemiBold', sans-serif`;
export const BoldFont = `'Poppins-Bold', sans-serif`;
export const ExtraBoldFont = `'Poppins-ExtraBold', sans-serif`;
export const BlackFont = `'Poppins-Black', sans-serif`;


export const LargeHeading = styled.div<{
  $bold: boolean;
  marginBottom?: string;
  textAlign?: string;
  alignSelf?: string;
  maxWidth?: string;
  color?: string;
}>`
  font-weight ${props => props.$bold ? "900" : "400"};
  font-family: ${BlackFont};
  font-size: 20px;
  line-height: normal;
  font-stretch: normal;
  ${optional('marginBottom', 'margin-bottom')}
  ${optional('textAlign', 'text-align')}
  ${optional('alignSelf', 'align-self')}
  ${optional('maxWidth', 'max-width')}
  ${optional('color', 'color', theme.colours.black)}

  -webkit-text-size-adjust:100%;  
  -moz-text-size-adjust:100%; 
  -ms-text-size-adjust:100%;

  ${breakpoint('desktop')`
  font-size: 24px;
  line-height: 26px;
  `}
`;

export const SmallHeading = styled.div<{
  $bold?: boolean;
  marginBottom?: string;
  textAlign?: string;
  alignSelf?: string;
  maxWidth?: string;
  color?: string;
}>`
  font-family: ${BoldFont};
  font-size: 16px;
  line-height: 20px;
  font-stretch: normal;
  ${optional('marginBottom', 'margin-bottom')}
  ${optional('textAlign', 'text-align')}
  ${optional('alignSelf', 'align-self')}
  ${optional('maxWidth', 'max-width')}
  ${optional('color', 'color', theme.colours.black)}

  -webkit-text-size-adjust:100%;  
  -moz-text-size-adjust:100%; 
  -ms-text-size-adjust:100%;
`;

export const LargeText = styled.div<{
  $bold?: boolean;
  marginBottom?: string;
  textAlign?: string;
  alignSelf?: string;
  maxWidth?: string;
  color?: string;
  fontWeight?: string;
}>`
  font-weight ${props => props.$bold ? "600" : "400"};
  font-size: 24px;
  line-height: 26px;
  font-stretch: normal;
  ${optional('marginBottom', 'margin-bottom')}
  ${optional('textAlign', 'text-align')}
  ${optional('alignSelf', 'align-self')}
  ${optional('maxWidth', 'max-width')}
  ${optional('color', 'color', theme.colours.black)}

  -webkit-text-size-adjust:100%;  
  -moz-text-size-adjust:100%; 
  -ms-text-size-adjust:100%;
`;

export const SmallText = styled.div<{
  $bold?: boolean;
  marginBottom?: string;
  textAlign?: string;
  alignSelf?: string;
  maxWidth?: string;
  color?: string;
  fontWeight?: string;
  width?: string;
}>`
  font-weight ${props => props.$bold ? "700" : "500"};
  font-size: 16px;
  line-height: normal;
  font-stretch: normal;
  ${optional('marginBottom', 'margin-bottom')}
  ${optional('textAlign', 'text-align')}
  ${optional('alignSelf', 'align-self')}
  ${optional('maxWidth', 'max-width')}
  ${optional('color', 'color', theme.colours.black)}

  -webkit-text-size-adjust:100%;  
  -moz-text-size-adjust:100%; 
  -ms-text-size-adjust:100%;
`;

export const HugeText = styled.div<{
  $bold?: boolean;
  marginBottom?: string;
  textAlign?: string;
  alignSelf?: string;
  maxWidth?: string;
  color?: string;
  fontWeight?: string;
}>`
  font-weight ${props => props.$bold ? "900" : "400"};
  font-size: 45px;
  line-height: 50px;
  font-stretch: normal;
  letter-spacing: -0.9px; 
  ${optional('marginBottom', 'margin-bottom')}
  ${optional('textAlign', 'text-align')}
  ${optional('alignSelf', 'align-self')}
  ${optional('maxWidth', 'max-width')}
  ${optional('color', 'color', theme.colours.black)}

  -webkit-text-size-adjust:100%;  
  -moz-text-size-adjust:100%; 
  -ms-text-size-adjust:100%;
`;

// TODO: Define all required text fonts here

