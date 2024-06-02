import React, { Fragment } from 'react';
import { Box, Typography } from '@mui/material';
import { contentSx, imageSx, titleSx, wrapperSx } from './About.styles';
import { Container } from '../../layouts/Container/Container';
import BoxIcon from '../../../images/box-icon.svg';
import Artwork from '../../../images/about-artwork.svg';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { ABOUT_WORDING } from 'constants/wording';
import { SECTION_WRAPPER_STYLES } from 'constants/styles';
import { Eyebrow } from 'components/core/Eyebrow/Eyebrow';
import { MarkdownRender } from 'components/core/MarkdownRenderer/MarkdownRenderer';
import { Element } from 'react-scroll';

export const About = () => {
  return (
    <Element name="about">
      <Box sx={SECTION_WRAPPER_STYLES}>
        <Container size="small">
          <Box sx={titleSx}>
            <SectionTitle
              eyebrow={ABOUT_WORDING.eyebrow}
              title={ABOUT_WORDING.title}
            />
            <Typography variant="body1" mx="auto">
              {ABOUT_WORDING.blurb}
            </Typography>
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
      </Box>
    </Element>
  );
};
