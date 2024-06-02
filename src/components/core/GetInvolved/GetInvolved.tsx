import React from 'react';
import { Box, Typography } from '@mui/material';
import { Container } from '../../layouts/Container/Container';
import Artwork from '../../../images/donate-artwork.svg';
import { Button } from '../Button/Button';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { colors } from '../../../theme/colors';
import { GET_INVOLVED_WORDING } from 'constants/wording';
import { SECTION_WRAPPER_STYLES } from 'constants/styles';

export const Donate = () => {
  return (
    <Box
      id="getInvolved"
      sx={{
        ...SECTION_WRAPPER_STYLES,
        background: colors.yellow[200],
      }}
    >
      <Container
        size="medium"
        sx={{
          display: 'flex',
          flexDirection: ['column', 'row'],
          justifyContent: 'space-between',
          gap: 10,
        }}
      >
        <Box sx={{ flexBasis: 450, order: [-1, 1] }}>
          <SectionTitle
            eyebrowColor="yellow.50"
            eyebrow={GET_INVOLVED_WORDING.eyebrow}
            title={GET_INVOLVED_WORDING.title}
          />
          <Typography variant="body1">
            {GET_INVOLVED_WORDING.content}
          </Typography>
          <Button
            variant="donate"
            sx={{ mt: 8, mb: 16, background: 'yellow.50' }}
          >
            Donate
          </Button>
        </Box>
        <Box sx={{ flexBasis: 550 }}>
          <img src={Artwork} alt="Donate section graphic" />
        </Box>
      </Container>
    </Box>
  );
};
