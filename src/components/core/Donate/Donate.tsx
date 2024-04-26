import React from 'react';
import { Box, Typography } from '@mui/material';
import {
  innerSx,
  imageSx,
  wrapperSx,
  buttonSx,
  contentSx,
  imageWrapperSx,
} from './Donate.styles';
import { Container } from '../../layouts/Container/Container';
import Artwork from '../../../images/donate-artwork.svg';
import BoxIcon from '../../../images/box-icon.svg';
import Server from '../../../images/server-icon.svg';
import { Button } from '../Button/Button';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { colors } from '../../../theme/colors';
import { DONATE_WORDING } from 'constants/wording';

export const Donate = () => {
  return (
    <Box sx={wrapperSx} id="donate">
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
        <Box sx={innerSx} id="donate">
          <Box sx={imageWrapperSx}>
            <Box sx={imageSx}>
              <img src={Artwork} alt="Donate section graphic" />
            </Box>
          </Box>
          <Box sx={contentSx}>
            <img src={BoxIcon} height={64} alt="Icon of a computing cloud" />
            <Typography variant="h5">{DONATE_WORDING.donate.title}</Typography>
            <Typography variant="body1">
              {DONATE_WORDING.donate.content}
            </Typography>
            <Box sx={buttonSx}>
              <Box>
                <Typography variant="h6" mb="0.5rem">
                  {DONATE_WORDING.donate.button.title}
                </Typography>
                <Typography variant="body2" mb={0}>
                  {DONATE_WORDING.donate.button.text}
                </Typography>
              </Box>
              <Box>
                <Button>Donate</Button>
              </Box>
            </Box>
            <img src={Server} height={64} alt="Icon of a computing cloud" />
            <Typography variant="h5">{DONATE_WORDING.contact.title}</Typography>
            <Typography variant="body1" mb={0}>
              {DONATE_WORDING.contact.content}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
