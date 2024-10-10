import React, { useEffect } from 'react';
import Underline from '../../images/underline-yellow.svg';
import Artwork from '../../images/donate-artwork.svg';
import { Container } from 'components/layouts/Container/Container';
import { Box, Grid, Link, Typography } from '@mui/material';
import { Section } from 'components/layouts/Section/Section';
import { animateScroll as scroll } from 'react-scroll';
import { MarkdownRender } from 'components/core/MarkdownRenderer/MarkdownRenderer';
import { SectionTitle } from 'components/core/SectionTitle/SectionTitle';
import { DONATE_WORDING } from 'constants/wording';
import { Accordion } from 'components/core/Accordion/Accordion';
import { colors } from 'theme/colors';
const { page, faqs } = DONATE_WORDING;

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
              mb: 4,
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
                  zIndex: -1,
                },
              },
            }}
          >
            <MarkdownRender>{page.title}</MarkdownRender>
          </Typography>
          <Typography>
            <MarkdownRender>{page.content}</MarkdownRender>
          </Typography>
          <Box
            sx={{
              my: 6,
              maxWidth: 400,
              mx: 'auto',
            }}
          >
            <Link
              sx={{
                backgroundColor: 'yellow.200',
                borderRadius: 200,
                border: `solid 1px ${colors.yellow[200]}`,
                display: 'inline-block',
                p: 3,
                textDecoration: 'none',
                transition: 'all 0.2s ease-in',
                width: '100%',
                '&:hover': {
                  backgroundColor: 'primary.white',
                  borderColor: 'yellow.200',
                },
              }}
              target="_blank"
              href="https://pay.zaprite.com/pl_7BDIKjO3bZ"
            >
              <Typography variant="h4" component="span">
                Make a donation
              </Typography>
            </Link>
            <Typography sx={{ mt: 2 }} variant="caption" component="p">
              {page.disclaimer}
            </Typography>
          </Box>
          <figure>
            <img src={Artwork} alt="Tech inspired artwork" />
          </figure>
        </Container>
      </Section>
      {/* <Section>
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
      </Section> */}
    </>
  );
};
