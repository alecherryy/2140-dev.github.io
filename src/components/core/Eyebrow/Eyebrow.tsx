import React from 'react';
import { Typography } from '@mui/material';

interface Props {
  color: string;
  text: string;
}
export const Eyebrow = ({ color, text }: Props) => {
  return (
    <Typography
      variant="body1"
      component="span"
      fontWeight={600}
      color={color}
      display="inline-block"
      mb={1}
    >
      {text}
    </Typography>
  );
};
