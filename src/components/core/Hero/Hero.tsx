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
import { MarkdownRender } from 'components/core/MarkdownRenderer/MarkdownRenderer';
import { Link } from 'react-scroll';

export const Hero = () => {
  return (
    <Box sx={wrapperSx}>
      <Container size="large" sx={containerSx}>
        <Box sx={leftSx}>
          <Typography variant="h1">
            <MarkdownRender>{HERO_WORDING.title}</MarkdownRender>
          </Typography>
          <Typography sx={blurbSx} variant="body1">
            {HERO_WORDING.blurb}
          </Typography>
          <Button component="div" sx={{ mt: 4 }}>
            <Link smooth duration={200} offset={-80} to="about">
              {HERO_WORDING.button}
            </Link>
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
