import React, { useEffect, useRef, useState } from 'react';
import { debounce } from 'lodash';
import { Logo } from '../../core/Logo/Logo';
import { Box, Link, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Container } from '../Container/Container';
import { colors } from '../../../theme/colors';
import { Menu } from 'components/core/Menu/Menu';
import { Button } from 'components/core/Button/Button';
import { FOOTER_WORDING } from 'constants/wording';
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
      size="large"
      sx={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        py: 2,
      }}
    >
      <Typography variant="caption" component="div" fontWeight={600}>
        <Link href="mailto:hello@2140.dev">hello@2140.dev</Link>
      </Typography>
      <Typography variant="caption" component="div">
        <MarkdownRender>{FOOTER_WORDING.gpg}</MarkdownRender>
      </Typography>
      <Typography variant="caption" component="div">
        <MarkdownRender>{FOOTER_WORDING.foundation}</MarkdownRender>
      </Typography>
      <Typography variant="caption" component="div">
        <MarkdownRender>{FOOTER_WORDING.attribution}</MarkdownRender>
      </Typography>
    </Container>
  );
};
