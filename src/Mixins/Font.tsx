import theme from "GlobalTheme";
import styled from "styled-components";
import breakpoint from 'styled-components-breakpoint';
import { optional } from "utils/styledComponents";

export const DefaultFont = `'Poppins'`;
export const StandardFont = `'Poppins', sans-serif`;
export const MediumFont = `'Poppins-Medium', sans-serif`;
export const SemiBoldFont = `'Poppins-SemiBold', sans-serif`;
export const BoldFont = `'Poppins-Bold', sans-serif`;
export const ExtraBoldFont = `'Poppins-ExtraBold', sans-serif`;
export const BlackFont = `'Poppins-Black', sans-serif`;

export const HugeText = styled.div<{
  $bold?: boolean;
  marginBottom?: string;
  textAlign?: string;
  alignSelf?: string;
  maxWidth?: string;
  color?: string;
  fontWeight?: string;
}>`
  font-family: ${DefaultFont};
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

export const LargeHeading = styled.div<{
  $bold: boolean;
  marginBottom?: string;
  textAlign?: string;
  alignSelf?: string;
  maxWidth?: string;
  color?: string;
}>`
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
  font-family: ${DefaultFont};
  font-size: 24px;
  line-height: 26px;
  font-stretch: normal;
  font-style: normal;
  ${optional('marginBottom', 'margin-bottom')}
  ${optional('textAlign', 'text-align')}
  ${optional('alignSelf', 'align-self')}
  ${optional('maxWidth', 'max-width')}
  ${optional('color', 'color', theme.colours.black)}

  -webkit-text-size-adjust:100%;  
  -moz-text-size-adjust:100%; 
  -ms-text-size-adjust:100%;
`;

export const MediumText = styled.div<{
  $bold?: boolean;
  marginBottom?: string;
  textAlign?: string;
  alignSelf?: string;
  maxWidth?: string;
  color?: string;
}>`
  font-family: ${DefaultFont};
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  ${optional('marginBottom', 'margin-bottom')}
  ${optional('textAlign', 'text-align')}
  ${optional('alignSelf', 'align-self')}
  ${optional('maxWidth', 'max-width')}
  ${optional('color', 'color', theme.colours.black)}

  -webkit-text-size-adjust:100%;  
  -moz-text-size-adjust:100%; 
  -ms-text-size-adjust:100%;
`;

export const MediumHeading = styled.h2<{
  $bold?: boolean;
  marginBottom?: string;
  textAlign?: string;
  alignSelf?: string;
  maxWidth?: string;
  color?: string;
}>`
  font-family: ${DefaultFont};
  font-size: 20px;
  font-style: normal;
  line-height: normal;
  ${optional('marginBottom', 'margin-bottom')}
  ${optional('textAlign', 'text-align')}
  ${optional('alignSelf', 'align-self')}
  ${optional('maxWidth', 'max-width')}
  ${optional('color', 'color', theme.colours.black)}

  -webkit-text-size-adjust:100%;  
  -moz-text-size-adjust:100%; 
  -ms-text-size-adjust:100%;
`;

export const SmallHeading = styled.div<{
  $bold?: boolean;
  marginBottom?: string;
  textAlign?: string;
  alignSelf?: string;
  maxWidth?: string;
  color?: string;
}>`
  font-family: ${DefaultFont};
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
  font-family: ${DefaultFont};
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

// TODO: Define all required text fonts here

