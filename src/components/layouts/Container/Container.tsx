import React from 'react';
import { Box, BoxProps } from '@mui/material';

type Props = BoxProps & {
  size?: 'large' | 'medium' | 'small';
  children: React.ReactNode;
};

const WIDTH: Record<'large' | 'medium' | 'small', [number, number]> = {
  large: [1568, 1616],
  medium: [1248, 1296],
  small: [848, 896],
};
export const Container = ({
  size = 'medium',
  children,
  sx,
  ...rest
}: Props) => (
  <Box
    sx={{
      maxWidth: WIDTH[size],
      mx: 'auto',
      px: [3, 6],
      ...sx,
    }}
    {...rest}
  >
    {children}
  </Box>
);
