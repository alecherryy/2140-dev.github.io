import React from 'react';
import { ButtonProps, Button as MuiButton, SxProps } from '@mui/material';
import { colors } from '../../../constants/theme/colors';
import Arrow from '../../../images/icon-arrow-right.svg'

type Props = ButtonProps & {
  sx?: SxProps,
};

const buttonSx: SxProps = {
  alignItems: 'center',
  display: 'inline-flex',
  fontWeight: 400,
  height: 64,
  p: 0,
  gap: 1,
  textAlign: 'center',
  textTransform: 'none',
  position: 'relative',
  '&:hover': {
    backgroundColor: 'transparent',
    'svg': {
      transform: 'rotate(0deg)',
    },
    '&::after': {
      background: colors.yellow[400],
      backgroundImage: `url(${Arrow})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }
  },
  'svg': {
    transform: 'rotate(205deg)',
    transition: 'all 0.5s ease-in-out',
  },
  '&::after': {
    content: '""',
    background: colors.yellow[200],
    backgroundImage: `url(${Arrow})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    borderRadius: 40,
    height: 40,
    position: 'absolute',
    right: 12,
    transition: 'all 0.2s ease-in',
    width: 40,
  }
}

export const Button = ({ children, sx, ...rest }: Props) => {
  return (
    <MuiButton sx={{
      ...buttonSx,
      ...sx
    }} {...rest}>{children} <OutlineCircle/></MuiButton>
  )
}

const OutlineCircle = () => {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
      <circle cx="32" cy="32" r="31.5" style={{
        stroke: colors.primary.main,
        strokeWidth: 1,
        strokeDasharray: 170,
      }}/>
    </svg>
  )
}