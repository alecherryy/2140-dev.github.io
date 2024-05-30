import React, { ReactNode } from 'react';
import { Box, ButtonProps, Button as MuiButton } from '@mui/material';
import { SystemStyleObject } from '@mui/system';
import { colors } from '../../../theme/colors';
import { commonButtonSx, buttonVariantSx } from './Button.styles';

type Props = Omit<ButtonProps, 'sx' | 'variant'> & {
  children?: ReactNode;
  sx?: SystemStyleObject;
  variant?: 'default' | 'bigButton';
};

export const Button = ({
  children,
  sx,
  variant = 'default',
  ...rest
}: Props) => {
  return (
    <MuiButton
      sx={{ ...commonButtonSx, ...buttonVariantSx[variant], ...sx }}
      {...rest}
    >
      {children}
      <Box component="span">
        <OutlineCircle />
      </Box>
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
