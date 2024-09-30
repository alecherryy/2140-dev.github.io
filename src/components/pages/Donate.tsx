import React, { useEffect } from 'react';
import Underline from '../../images/underline-yellow.svg';
import Artwork from '../../images/donate-artwork.svg';
import { Container } from 'components/layouts/Container/Container';
import { Box, Grid, Typography } from '@mui/material';
import { Section } from 'components/layouts/Section/Section';
import { animateScroll as scroll } from 'react-scroll';
import { MarkdownRender } from 'components/core/MarkdownRenderer/MarkdownRenderer';
import { SectionTitle } from 'components/core/SectionTitle/SectionTitle';
import { DONATE_WORDING } from 'constants/wording';
import { Accordion } from 'components/core/Accordion/Accordion';
const { page, faqs, donate } = DONATE_WORDING;

export const Donate = () => {
  useEffect(() => {
    scroll.scrollToTop({
      duration: 500,
      smooth: true,
    });
  }, []);

  return (
    <>
      <Section>
        <Container size="sm" sx={{ pt: 10, textAlign: 'center' }}>
          <Typography
            variant="h1"
            sx={{
              textWrap: 'balance',
              u: {
                textDecoration: 'none',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '0.25rem',
                  left: '1rem',
                  height: '1rem',
                  width: '105%',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                  backgroundImage: `url('${Underline}')`,
                },
              },
            }}
          >
            <MarkdownRender>{page.title}</MarkdownRender>
          </Typography>
          <Typography mb={6}>{page.content}</Typography>
          <img src={Artwork} alt="Tech inspired artwork" />
        </Container>
      </Section>
      <Section>
        <Container size="md">
          <Grid container spacing={['5rem', '10rem']}>
            <Grid item xs={12} md={6}>
              <SectionTitle
                eyebrow={faqs.eyebrow}
                title={faqs.title}
                eyebrowColor="blue.100"
              />
              <Typography>{faqs.content}</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Accordion sx={{ pt: 4 }} items={faqs.items} />
            </Grid>
          </Grid>
        </Container>
      </Section>
    </>
  );
};
