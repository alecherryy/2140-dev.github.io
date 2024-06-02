import React from 'react';
import { Box, Typography } from '@mui/material';
import {
  innerSx,
  imageSx,
  donateWrapperSx,
  rightSx,
  imageWrapperSx,
} from './Donate.styles';
import { Container } from '../../layouts/Container/Container';
import Artwork from '../../../images/donate-artwork.svg';
import { Button } from '../Button/Button';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { colors } from '../../../theme/colors';
import { DONATE_WORDING } from 'constants/wording';
import { SECTION_WRAPPER_STYLES } from 'constants/styles';
import { Eyebrow } from 'components/core/Eyebrow/Eyebrow';
import { MarkdownRender } from 'components/core/MarkdownRenderer/MarkdownRenderer';

export const Donate = () => {
  return (
    <>
      <Box sx={{ ...SECTION_WRAPPER_STYLES }} id="getInvolved">
        <Container size="medium">
          <SectionTitle
            eyebrow={DONATE_WORDING.eyebrow}
            title={DONATE_WORDING.title}
            sx={{
              textAlign: 'center',
              mb: 10,
              '.MuiTypography-body1': {
                color: colors.yellow[50],
              },
            }}
          />
          <Box sx={donateWrapperSx}>
            <Eyebrow text={DONATE_WORDING.donate.eyebrow} color="yellow.200" />
            <Typography variant="h5">{DONATE_WORDING.donate.title}</Typography>
            <Typography variant="body1">
              <MarkdownRender>{DONATE_WORDING.donate.content}</MarkdownRender>
            </Typography>

            <Button variant="large" sx={{ my: 8 }}>
              Donate
            </Button>
          </Box>
        </Container>
      </Box>
      <Box sx={{ ...SECTION_WRAPPER_STYLES, background: colors.yellow[200] }}>
        <Container size="medium">
          <Box sx={innerSx}>
            <Box sx={imageWrapperSx}>
              <Box sx={imageSx}>
                <img src={Artwork} alt="Donate section graphic" />
              </Box>
            </Box>
            <Box sx={rightSx}>
              <Eyebrow
                text={DONATE_WORDING.contact.eyebrow}
                color="yellow.50"
              />
              <Typography variant="h5">
                {DONATE_WORDING.contact.title}
              </Typography>
              <Typography variant="body1" mb={0}>
                {DONATE_WORDING.contact.content}
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
