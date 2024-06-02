import { SxProps } from '@mui/material';

export const menuSx: SxProps = {
  display: 'flex',
  p: 0,
};

export const itemSx: SxProps = {
  mb: 0,
  p: 0,
  position: 'relative',
  whiteSpace: 'nowrap',
  '&:not(:last-child)': {
    mr: 7,
  },

  a: {
    cursor: 'pointer',
  },
};
