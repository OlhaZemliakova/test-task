import React, { useEffect, useState } from 'react';
import {
  NavbarInnerWrapper,
  NavbarLogoWrapper,
  NavbarProfilePill,
  NavbarProfileWrapper,
  NavbarWrapper,
  NavbarHeading
} from './styles/Navbar';
import { useTheme } from 'styled-components';
import { useHistory } from 'react-router';

import Logo from 'images/fedd_logo.png'
import Doggy from 'images/doggy.png'


type NavbarPropsType = {};

const Navbar = ({ }: NavbarPropsType) => {

  const theme = useTheme();
  const history = useHistory();

  return (
    <NavbarWrapper>
      <NavbarInnerWrapper>
        <NavbarLogoWrapper src={Logo} />
        <NavbarProfilePill>
          <NavbarProfileWrapper src={Doggy} />
          <NavbarHeading>
            Billy
          </NavbarHeading>
        </NavbarProfilePill>
      </NavbarInnerWrapper>
    </NavbarWrapper>
  );
};

export default Navbar;
