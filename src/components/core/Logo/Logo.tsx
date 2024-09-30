import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, ButtonBase } from '@mui/material';
import { useMenuContext } from 'providers/MenuProvider/hooks/useMenuContext';
import { NavLink } from 'react-router-dom';
import LogoImage from '../../../images/logo.svg';

export const Logo = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { isMobileMenuOpen, handleMenuClick } = useMenuContext();

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (isMobile && isMobileMenuOpen) {
      handleMenuClick();
    }
  };

  return (
    <Box sx={{ position: 'relative', zIndex: 99, maxWidth: 80 }}>
      <NavLink to="/">
        <ButtonBase onClick={handleClick}>
          <img src={LogoImage} alt="2140 Logo" />
        </ButtonBase>
      </NavLink>
    </Box>
  );
};
