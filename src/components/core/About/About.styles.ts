import { SxProps } from '@mui/material';

export const wrapperSx: SxProps = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: {
    xs: 'column-reverse',
    md: 'row'
  },
  gap: 6,
  justifyContent: 'space-between',
}

export const titleSx: SxProps = {
  flexBasis: '100%',
  mb: 6,
  textAlign: 'center',
  textWrap: 'balance',
}

export const contentSx: SxProps = {
  flexBasis: 400,
}

export const imageSx: SxProps = {
  flexBasis: 600,
  
  'img': {
    maxWidth: '100%'
  }
}