import React from 'react';
import { Box, SxProps } from '@mui/material';

interface Props {
  size?: 'large' | 'medium' | 'small';
  sx?: SxProps;
  children: React.ReactNode;
}

const WIDTH: Record<'large' | 'medium' | 'small', [number, number]> = {
  large: [1568, 1616],
  medium: [1248, 1296],
  small: [848, 896],
};
export const Container = ({ size = 'medium', children, sx }: Props) => (
  <Box
    sx={{
      maxWidth: WIDTH[size],
      mx: 'auto',
      px: [3, 4, 6],
      ...sx,
    }}
  >
    {children}
  </Box>
);
