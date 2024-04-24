import React, { ReactNode } from 'react';
import { ButtonProps, Button as MuiButton } from '@mui/material';
import { SystemStyleObject } from '@mui/system';
import { colors } from '../../../theme/colors';
import { buttonSx } from './Button.styles';

type Props = Omit<ButtonProps, 'sx'> & {
  children?: ReactNode;
  sx?: SystemStyleObject;
};

export const Button = ({ children, sx, ...rest }: Props) => {
  return (
    <MuiButton sx={{ ...buttonSx, ...sx }} {...rest}>
      {children} <OutlineCircle />
    </MuiButton>
  );
};

const OutlineCircle = () => {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
      <circle
        cx="32"
        cy="32"
        r="31.5"
        style={{
          stroke: colors.primary.main,
          strokeWidth: 1,
          strokeDasharray: 170,
        }}
      />
    </svg>
  );
};
