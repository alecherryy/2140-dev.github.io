import React, { useEffect, useRef, useState } from 'react';
import { debounce } from 'lodash';
import { Box, Link, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Container } from '../Container/Container';
import { FOOTER_WORDING } from 'constants/wording';
import Email from '../../../images/icons/email.svg';
import { MarkdownRender } from 'components/core/MarkdownRenderer/MarkdownRenderer';

export const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isSticky, setIsSticky] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleScroll = debounce(() => {
    const div = ref?.current;
    if (div) {
      const height = div.getBoundingClientRect().height;
      if (window.scrollY > height) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <Container
      size="lg"
      sx={{
        alignItems: {
          xs: 'column',
          lg: 'center',
        },
        display: 'flex',
        flexDirection: {
          xs: 'column',
          lg: 'row',
        },
        gap: 3,
        justifyContent: 'space-between',
        py: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          flexDirection: ['column', 'row'],
          gap: 3,
        }}
      >
        <Link
          href={`mailto:${FOOTER_WORDING.email}`}
          sx={{ display: 'inline-flex', gap: 1, alignItems: 'center' }}
        >
          <img src={Email} alt="Email icon" width={20} />
          <Typography
            variant="caption"
            component="span"
            fontWeight={600}
            color="primary.dark"
          >
            {FOOTER_WORDING.email}
          </Typography>
        </Link>
        <Typography variant="caption" component="div" color="primary.dark">
          <MarkdownRender>{FOOTER_WORDING.gpg}</MarkdownRender>
        </Typography>
      </Box>
      <Typography variant="caption" component="div">
        <MarkdownRender>{FOOTER_WORDING.text}</MarkdownRender>
      </Typography>
    </Container>
  );
};
