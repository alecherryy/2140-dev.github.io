import { SxProps } from '@mui/material';
import { colors } from '../../../theme/colors';

export const innerSx: SxProps = {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'flex-end',
  flexDirection: {
    xs: 'column-reverse',
    md: 'row',
  },
  gap: {
    xs: 4,
    md: '8rem',
  },
};

export const donateWrapperSx: SxProps = {
  mx: 'auto',
  maxWidth: 600,
  textAlign: 'center',
};

export const rightSx: SxProps = {
  flexBasis: 450,
};

export const imageWrapperSx: SxProps = {
  flex: 1,
  height: '100%',
  minHeight: '100%',
  position: 'relative',
};

export const imageSx: SxProps = {
  // mr: {
  //   xs: -3,
  //   md: undefined,
  // },
  // right: '25%',
  // width: '150%',
  // minWidth: {
  //   xs: '150%',
  //   md: 'auto',
  // },
};

export const buttonSx: SxProps = {
  background: colors.yellow[50],
  borderRadius: 100,
  p: 3,
  paddingLeft: 5,
  mt: 3,
  mb: 10,
};
