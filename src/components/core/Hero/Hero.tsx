import React from 'react';
import { Box, Typography } from '@mui/material';
import { backgroundSx, blurbSx, containerSx, imageSx, leftSx, wrapperSx } from './Hero.styles';
import { Container } from '../../layouts/Container/Container';
import Artwork from '../../../images/artwork.svg';
import Background from '../../../images/background.svg';
import { Button } from '../Button/Button';

export const Hero = () => {
  return (
    <Box sx={wrapperSx}>
      <Container size="large" sx={containerSx}>
        <Box sx={leftSx}>
          <Typography variant="h1">
            The year was <Typography variant="h1" component="span" fontWeight={300}>2140</Typography>
          </Typography>
          <Typography sx={blurbSx} variant="body1">
            We are dedicated to advancing Bitcoin through direct support and employment for researchers and developers
            contributing to its ecosystem.
          </Typography>
          <Button sx={{ mt: 4, }}>Read more</Button>
        </Box>
        <Box sx={backgroundSx}>
          <img src={Background} alt="Background swiggle"/>
        </Box>
        <Box sx={imageSx}>
          <img src={Artwork} alt="Hero graphic"/>
        </Box>
      </Container>
    </Box>
  )
}