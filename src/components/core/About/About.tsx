import React from 'react';
import { Box, Typography } from '@mui/material';
import { contentSx, imageSx, titleSx, wrapperSx } from './About.styles';
import { Container } from '../../layouts/Container/Container';
import Artwork from '../../../images/about-artwork.svg';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { ABOUT_WORDING } from 'constants/wording';
import { Eyebrow } from 'components/core/Eyebrow/Eyebrow';
import { MarkdownRender } from 'components/core/MarkdownRenderer/MarkdownRenderer';
import { Section } from 'components/layouts/Section/Section';
import { typeface } from 'theme/typography';

export const About = () => {
  return (
    <Section id="about">
      <Container size="small">
        <Box sx={titleSx}>
          <SectionTitle
            eyebrow={ABOUT_WORDING.eyebrow}
            title={ABOUT_WORDING.title}
          />
          <Typography variant="body1">{ABOUT_WORDING.blurb}</Typography>
        </Box>
      </Container>
      <Container size="medium">
        <Box sx={wrapperSx}>
          <Box sx={contentSx}>
            {ABOUT_WORDING.sections.map((section, i) => (
              <Box key={i} mb={6}>
                <Eyebrow text={section.eyebrow} color="blue.100" />
                <Typography variant="h5">{section.subtitle}</Typography>
                <Typography variant="body1">
                  <MarkdownRender>{section.content}</MarkdownRender>
                </Typography>
              </Box>
            ))}
          </Box>
          <Box sx={imageSx}>
            <img src={Artwork} alt="About vector graphic" />
          </Box>
        </Box>
      </Container>
    </Section>
  );
};
