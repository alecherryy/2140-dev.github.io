import { SxProps } from '@mui/material';
import { colors } from '../../../theme/colors';

export const wrapperSx: SxProps = {
  background: colors.yellow[200],
  py: 20,
};

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
    md: 0,
  },
};

export const contentSx: SxProps = {
  flexBasis: 450,
};

export const imageWrapperSx: SxProps = {
  alignItems: 'center',
  flexBasis: 'calc(100% - 450px - 4rem)',
  display: 'flex',
  justifyContent: {
    xs: 'flex-end',
    md: 'center',
  },
  height: '100%',
  minHeight: '100%',
  position: 'relative',
};

export const imageSx: SxProps = {
  position: {
    md: 'absolute',
  },
  right: '25%',
  width: '150%',
  minWidth: {
    xs: '150%',
    md: 'auto',
  },
};

export const buttonSx: SxProps = {
  alignItems: 'center',
  background: colors.yellow[50],
  borderRadius: 100,
  display: 'inline-flex',
  gap: 4,
  justifyContent: 'space-between',
  p: 3,
  paddingLeft: 5,
  mt: 3,
  mb: 10,
  width: {
    xs: '100%',
    md: 'auto',
  },
};
