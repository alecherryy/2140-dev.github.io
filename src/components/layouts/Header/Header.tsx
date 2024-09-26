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
    if (div) {
      const height = div.getBoundingClientRect().height;
      if (window.scrollY > height) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
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
        transition: 'all 0.2s ease-in',
        ...((isSticky || isMobile) && { position: 'fixed' }),
        ...(!isMobile &&
          isSticky && {
            background: colors.primary.light,
            color: colors.primary.main,
            boxShadow: '0 0 40px rgba(0, 0, 0, 0.1)',
          }),
      }}
    >
      <Container
        size="large"
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
