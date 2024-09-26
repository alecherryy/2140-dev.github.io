import { SxProps } from '@mui/material';

export const wrapperSx: SxProps = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: {
    xs: 'column',
    md: 'row',
  },
  gap: 6,
  pt: 5,
  justifyContent: 'space-between',
};

export const titleSx: SxProps = {
  mb: 6,
  textAlign: 'center',
  position: 'relative',
  textWrap: {
    xs: 'inherit',
    md: 'balance',
  },
};

export const contentSx: SxProps = {
  flexBasis: {
    xs: 'auto',
    md: 500,
  },
};

export const imageSx: SxProps = {
  flexBasis: {
    xs: 'auto',
    md: 500,
  },

  img: {
    maxWidth: { xs: 400, md: '100%' },
  },
};
