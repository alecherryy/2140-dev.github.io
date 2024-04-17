import { SxProps } from '@mui/material';
import { colors } from '../../../constants/theme/colors';

export const cardSx: SxProps = {
  alignItems: 'center',
  background: colors.yellow[200],
  borderRadius: 80,
  display: 'flex',
  gap: 6,
  p: 3,
  px: 4,
}
export const imageSx: SxProps = {
  alignItems: 'center',
  borderRadius: 80,
  display: 'flex',
  height: 80,
  justifyContent: 'center',
  m: 1,
  maxWidth: 80,
  position: 'relative',
}

export const svgSx: SxProps = {
  position: 'absolute',
}

export const linkSx: SxProps = {
  alignItems: 'center',
  display: 'inline-flex',
  height: 24,
  justifyContent: 'center',
  width: 24,
}