import React, { useEffect, useRef, useState } from 'react';
import { debounce } from 'lodash';
import { Logo } from '../../core/Logo/Logo';
import { Box, SxProps } from '@mui/material';
import { Menu } from '../../core/Menu/Menu';
import { Container } from '../Container/Container';
import { colors } from '../../../constants/theme/colors';

const stickySx: SxProps = {
  background: colors.yellow[50],
  color: colors.primary.main,
  boxShadow: '0 0 40px rgba(0, 0, 0, 0.1)',
  position: 'fixed',
}
export const Header = () => {
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
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);
  
  return (
    (
      <Box
        ref={ref}
        sx={{
          color: colors.yellow[50],
          position: 'absolute',
          overflow: 'hidden',
          width: '100%',
          zIndex: 999,
          transition: 'all 0.2s ease-in',
          ...(isSticky && stickySx),
        }}
      >
        <Container sx={{
          alignItems: 'center',
          height: 80,
          display: 'flex',
          justifyContent: 'space-between',
        }} size="large">
          <Logo/>
          <Menu/>
        </Container>
      </Box>
    )
  )
}