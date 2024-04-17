import React from 'react';
import { Box, Typography } from '@mui/material';
import { innerSx, imageSx, wrapperSx, buttonSx, contentSx } from './Donate.styles';
import { Container } from '../../layouts/Container/Container';
import Artwork from '../../../images/donate-artwork.svg';
import Cloud from '../../../images/cloud-icon.svg';
import Server from '../../../images/server-icon.svg';
import { Button } from '../Button/Button';
import { SectionTitle } from '../../SectionTitle/SectionTitle';
import { colors } from '../../../constants/theme/colors';

export const Donate = () => {
  return (
    <Box sx={wrapperSx} id="donate">
      <Container size="medium">
        <SectionTitle
          eyebrow={DONATE_WORDING.eyebrow}
          title={DONATE_WORDING.title}
          sx={{
            textAlign: "center",
            mb: 10,
            '.MuiTypography-body1': {
              color: colors.yellow[50]
            }
          }}
        />
        <Box sx={innerSx} id="donate">
          <Box sx={imageSx}>
            <img src={Artwork} alt="Donate section graphic"/>
          </Box>
          <Box sx={contentSx}>
            <img src={Cloud} height={64} alt="Icon of a computing cloud"/>
            <Typography variant="h5">{DONATE_WORDING.donate.title}</Typography>
            <Typography variant="body1">
              {DONATE_WORDING.donate.content}
            </Typography>
            <Box sx={buttonSx}>
              <Box>
                <Typography variant="h6" mb='0.5rem'>{DONATE_WORDING.donate.button.title}</Typography>
                <Typography variant="body2" mb={0}>{DONATE_WORDING.donate.button.text}</Typography>
              </Box>
              <Box>
                <Button>Donate</Button>
              </Box>
            </Box>
            <img src={Server} height={64} alt="Icon of a computing cloud"/>
            <Typography variant="h5">{DONATE_WORDING.contact.title}</Typography>
            <Typography variant="body1" mb={0}>{DONATE_WORDING.contact.content}</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

const DONATE_WORDING = {
  eyebrow: '03 — Donate',
  title: 'Get involved in our mission',
  donate: {
    title: `Donate — Support the Future of Bitcoin`,
    content: `Your donation fuels the innovative work of leading Bitcoin researchers and developers, ensuring the growth and security of the ecosystem. With your contribution, we can offer more resources, opportunities, and support to those shaping the future of Bitcoin.`,
    button: { title: 'Support our mission', text: 'Join us in empowering this vital work' },
  },
  contact: {
    title: `Get in touch — At 2140, we're always eager to connect`,
    content: `Whether you're a developer with insights to share, a potential collaborator interested in our mission, or simply curious about our work, your thoughts are invaluable to us. Reach out today to discuss how we can work together to secure and innovate the Bitcoin ecosystem.`
  }
}