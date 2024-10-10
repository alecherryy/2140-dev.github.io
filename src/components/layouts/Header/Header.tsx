import React, { useEffect, useRef, useState } from 'react';
import { debounce } from 'lodash';
import { Logo } from '../../core/Logo/Logo';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Container } from '../Container/Container';
import { colors } from '../../../theme/colors';
import { Menu } from 'components/core/Menu/Menu';

export const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isSticky, setIsSticky] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleScroll = debounce(() => {
    const div = ref?.current;
    const scrollY = window.scrollY;

    if (div) {
      if (scrollY < 80) {
        div.style.position = 'absolute';
        div.style.transform = 'none';
        div.style.transition = 'none';
        div.style.boxShadow = 'none';
        div.style.background = 'transparent';
        setIsSticky(false);
      }
      // set isSticky to true if the user has scrolled more than 80px
      if (scrollY >= 80 && !isSticky) {
        const height = div.getBoundingClientRect().height;
        if (window.scrollY > height) {
          div.style.position = 'fixed';
          div.style.transform = 'translateY(-100%)';
          div.style.background = colors.primary.white;

          setTimeout(() => {
            div.style.transition = 'all 0.4s cubic-bezier(0.83, 0, 0.17, 1)';
          }, 100);

          setTimeout(() => {
            div.style.transform = 'translateY(0)';
            div.style.boxShadow = '0 0 40px rgba(0, 0, 0, 0.1)';
          }, 300);

          setIsSticky(true);
        }
      }
    }
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <Box
      ref={ref}
      sx={{
        color: 'primary.main',
        position: 'absolute',
        overflow: 'hidden',
        width: '100%',
        zIndex: 999,
      }}
    >
      <Container
        size="lg"
        sx={{
          alignItems: 'center',
          height: 80,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Logo />
        <Menu isMobile={isMobile} />
      </Container>
    </Box>
  );
};
