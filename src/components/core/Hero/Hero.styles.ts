import { SxProps } from '@mui/material';
import { colors } from '../../../theme/colors';

export const wrapperSx: SxProps = {
  height: {
    lg: '100vh',
  },
  overflow: {
    xs: 'hidden',
    md: 'visible',
  },
};

export const containerSx: SxProps = {
  alignItems: 'center',
  display: ['block', 'block', 'flex'],
  height: '100%',
  justifyContent: 'space-between',
  py: 10,
  position: 'relative',
};

export const leftSx: SxProps = {
  flexBasis: '50%',
  minWidth: '50%',
  pl: {
    xs: 0,
    lg: 6,
  },
  pt: {
    xs: 10,
    lg: 0,
  },
  h1: {
    whiteSpace: 'nowrap',
  },
};

export const backgroundSx: SxProps = {
  position: 'absolute',
  right: '-8%',
  top: 0,
  zIndex: -1,
  '::after': {
    background: colors.yellow[200],
    content: '""',
    display: { xs: 'none', lg: 'block' },
    height: '100%',
    left: '99%',
    position: 'absolute',
    top: 0,
    width: '100vw',
  },
};

export const imageSx: SxProps = {
  maxWidth: '100%',
  position: {
    xl: 'absolute',
  },
  right: 0,
  zIndex: -1,
};

export const blurbSx: SxProps = {
  mt: 1,
  maxWidth: 600,
};
