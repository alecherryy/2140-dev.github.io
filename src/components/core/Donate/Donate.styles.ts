import { SxProps } from '@mui/material';
import { colors } from '../../../constants/theme/colors';

export const wrapperSx: SxProps = {
  background: colors.yellow[200],
  py: 20,
}

export const innerSx: SxProps = {
  alignItems: 'center',
  display: ['block', 'flex'],
  justifyContent: 'flex-end',
}

export const contentSx: SxProps = {
  flexBasis: 450,
}

export const imageSx: SxProps = {
  flexBasis: 'auto',
  position: 'absolute',
  right: '50%'
}

export const buttonSx: SxProps = {
  alignItems: 'center',
  background: colors.yellow[50],
  borderRadius: 100,
  display: 'inline-flex',
  gap: 4,
  p: 3,
  paddingLeft: 5,
  mt: 3,
  mb: 10,
}