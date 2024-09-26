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

export const buttonSx: SxProps = {
  background: colors.primary.light,
  borderRadius: 100,
  p: 3,
  paddingLeft: 5,
  mt: 3,
  mb: 10,
};
