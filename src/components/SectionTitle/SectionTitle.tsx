import { Box, SxProps, Typography } from '@mui/material';
import { colors } from '../../constants/theme/colors';
import React from 'react';

type Props = {
  eyebrow: string;
  title: string
  sx?: SxProps
}
export const SectionTitle = ({ eyebrow, title, sx }: Props) => {
  return (
    <Box sx={sx}>
      <Typography
        variant="body1"
        component="span"
        fontWeight={600}
        color={colors.yellow[200]}
      >
        {eyebrow}
      </Typography>
      <Typography
        variant="h2"
      >
        {title}
      </Typography>
    </Box>
  )
}