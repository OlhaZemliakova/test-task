import { SmallHeading } from 'Mixins/Font';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: ${({ theme }) => theme.sizing.navbar.mobile.height}px;
  width: 100%;
  background: white;
  position: fixed;
`;

export const NavbarInnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 15px;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  
  ${breakpoint('mobile')`
    max-width: 350px;
  `}
  ${breakpoint('tablet')`
    max-width: 900px;
  `}
`;

export const NavbarLogoWrapper = styled.img`
  max-width: 84px;
  width: 100%;
  height: auto;

  ${breakpoint('tablet')`
  max-width: 100px;
`}
  ${breakpoint('desktop')`
    max-width: 144px;
  `}
`
export const NavbarProfileWrapper = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 30px;
`
export const NavbarProfilePill = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  background: ${({ theme }) => theme.colours.primary.light};
  justify-content: space-between;
  height: 35px;
  min-width: 100px;
  border-radius: 50px;
  padding: 2px 25px 2px 5px;
`

export const NavbarHeading = styled(SmallHeading)`
  font-weight: 700;
  text-align: flex-start;

  ${breakpoint('desktop')`
    font-weight: 800;
    font-size: 20px;
  `}
`;