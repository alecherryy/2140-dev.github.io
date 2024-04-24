import React from 'react';
import { Box, Typography } from '@mui/material';
import { contentSx, imageSx, titleSx, wrapperSx } from './About.styles';
import { Container } from '../../layouts/Container/Container';
import Cloud from '../../../images/cloud-icon.svg';
import Artwork from '../../../images/about-artwork.svg';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { ABOUT_WORDING } from 'constants/wording';

export const About = () => {
  return (
    <Box py={15} id="about">
      <Container size="small">
        <Box sx={titleSx}>
          <SectionTitle
            eyebrow={ABOUT_WORDING.eyebrow}
            title={ABOUT_WORDING.title}
          />
          <Typography variant="body1" maxWidth={500} mx="auto">
            {ABOUT_WORDING.content}
          </Typography>
        </Box>
      </Container>
      <Container size="medium">
        <Box sx={wrapperSx}>
          <Box sx={contentSx}>
            <img src={Cloud} width={64} alt="Icon of a computing cloud" />
            <Typography variant="h5">{ABOUT_WORDING.subtitle}</Typography>
            {ABOUT_WORDING.paragraphs.map((paragraph, index) => (
              <Typography key={index} variant="body1">
                {paragraph}
              </Typography>
            ))}
          </Box>
          <Box sx={imageSx}>
            <img src={Artwork} alt="About vector graphic" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
