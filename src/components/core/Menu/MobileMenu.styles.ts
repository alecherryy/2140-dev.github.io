import { SxProps } from '@mui/material';
import { colors } from '../../../theme/colors';
import { typography } from 'theme/typography';

export const iconSx: SxProps = {
  position: 'relative',
  zIndex: 12,
};

export const buttonSx: SxProps = {
  backgroundColor: colors.primary.main,
  borderRadius: 48,
  height: 48,
  width: 48,
};

export const menuSx: SxProps = {
  alignItems: 'center',
  background: colors.yellow[200],
  display: 'none',
  flexDirection: 'column',
  height: '100vh',
  justifyContent: 'center',
  left: 0,
  p: 3,
  position: 'fixed',
  top: 0,
  transition: 'all 0.5 ease-in',
  transitionDelay: '1s',
  width: '100vw',
  zIndex: 11,
};

export const itemSx: SxProps = {
  textAlign: 'center',
  width: 'auto',
  p: 0,
  mb: 0,
};

export const linkSx: SxProps = {
  fontSize: typography.h4,
  color: colors.yellow[50],
  p: 0,
  textDecoration: 'none',
  position: 'relative',
};
