import { SxProps } from '@mui/material';
import { colors } from '../../../theme/colors';

const SIZE = {
  xs: 50,
  md: 80,
};
export const cardSx: SxProps = {
  alignItems: 'center',
  background: colors.yellow[200],
  borderRadius: SIZE,
  display: 'flex',
  gap: [3, 6],
  py: 3,
  px: [3, 4],
};

export const imageSx: SxProps = {
  alignItems: 'center',
  borderRadius: SIZE,
  display: 'flex',
  height: SIZE,
  justifyContent: 'center',
  m: 1,
  maxWidth: SIZE,
  position: 'relative',

  figure: {
    borderRadius: SIZE,
    overflow: 'hidden',
    height: SIZE,
    width: SIZE,
    margin: 0,
  },
  img: {
    width: SIZE,
    height: SIZE,
    objectFit: 'cover',
  },
};

export const svgSx: SxProps = {
  position: 'absolute',

  svg: {
    height: {
      xs: 70,
      md: 110,
    },
    width: {
      xs: 70,
      md: 110,
    },
  },
};

export const linkSx: SxProps = {
  alignItems: 'center',
  display: 'inline-flex',
  height: 24,
  justifyContent: 'center',
  width: 24,
};
