import React from 'react';
import { Logo } from '../../core/Logo/Logo';
import { Box } from '@mui/material';
import { DesktopMenu } from '../../core/Menu/DesktopMenu';
import { Container } from '../Container/Container';
import { colors } from '../../../theme/colors';

export const Section = () => (
  <Box
    sx={{
      left: 0,
      position: 'fixed',
      top: 0,
      overflow: 'hidden',
      width: '100%',

      '&::before': {
        background: colors.primary.dark,
        content: '""',
        display: 'block',
        bottom: 0,
        right: 0,
        width: '65%',
        height: '1px',
        position: 'absolute',
      },
    }}
  >
    <Container
      sx={{
        alignItems: 'center',
        height: 80,
        display: 'flex',
        justifyContent: 'space-between',
      }}
      size="large"
    >
      <Logo />
      <DesktopMenu />
    </Container>
  </Box>
);
