import { SxProps } from '@mui/material';
import { colors } from '../../../constants/theme/colors';

export const menuSx: SxProps = {
  display: 'flex',
  p: 0,
}

export const itemSx: SxProps = {
  p: 0,
  mb: 0,
  position: 'relative',
  '&:not(:last-child)': {
    mr: 5,
    pr: 5,
    
    '&::after': {
      content: '""',
      display: 'block',
      height: '100%',
      width: '1px',
      right: 0,
      position: 'absolute',
      background: colors.yellow[400]
    }
  }
}

export const linkSx: SxProps = {
  color: 'inherit',
  p: 0,
  textDecoration: 'none',
  position: 'relative',
}