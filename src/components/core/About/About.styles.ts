import { SxProps } from '@mui/material';

export const wrapperSx: SxProps = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: {
    xs: 'column-reverse',
    md: 'row',
  },
  gap: 6,
  justifyContent: 'space-between',
};

export const titleSx: SxProps = {
  flexBasis: '100%',
  mb: 6,
  textAlign: 'center',
  textWrap: {
    xs: 'inherit',
    md: 'balance',
  },
};

export const contentSx: SxProps = {
  flexBasis: {
    md: 400,
  },
};

export const imageSx: SxProps = {
  flexBasis: {
    md: 600,
  },

  img: {
    maxWidth: { xs: 400, md: '100%' },
  },
};
