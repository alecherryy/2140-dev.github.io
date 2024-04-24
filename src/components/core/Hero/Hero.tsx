import React from 'react';
import { Box, Typography } from '@mui/material';
import {
  backgroundSx,
  blurbSx,
  containerSx,
  imageSx,
  leftSx,
  wrapperSx,
} from './Hero.styles';
import Artwork from '../../../images/artwork.svg';
import Background from '../../../images/background.svg';
import { Button } from '../Button/Button';
import { Container } from 'components/layouts/Container/Container';
import { HERO_WORDING } from 'constants/wording';

export const Hero = () => {
  const handleClick = () => {
    document
      ?.getElementById('about')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <Box sx={wrapperSx}>
      <Container size="large" sx={containerSx}>
        <Box sx={leftSx}>
          <Typography variant="h1">
            {HERO_WORDING.title}{' '}
            <Typography variant="h1" component="span" fontWeight={300}>
              {HERO_WORDING.year}
            </Typography>
          </Typography>
          <Typography sx={blurbSx} variant="body1">
            {HERO_WORDING.blurb}
          </Typography>
          <Button sx={{ mt: 4 }} onClick={handleClick}>
            {HERO_WORDING.button}
          </Button>
        </Box>
        <Box sx={backgroundSx}>
          <img src={Background} alt="Background swiggle" />
        </Box>
        <Box sx={imageSx}>
          <img src={Artwork} alt="Hero graphic" />
        </Box>
      </Container>
    </Box>
  );
};
