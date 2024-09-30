import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Container } from '../../layouts/Container/Container';
import { TeamMember } from '../TeamMember/TeamMember';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { TEAM_WORDING } from 'constants/wording';
import { Eyebrow } from 'components/core/Eyebrow/Eyebrow';
import Markdown from 'markdown-to-jsx';
import { MarkdownRender } from 'components/core/MarkdownRenderer/MarkdownRenderer';
import { Section } from 'components/layouts/Section/Section';

export const Team = () => {
  return (
    <Section id="team">
      <Container size="sm">
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <SectionTitle
            eyebrow={TEAM_WORDING.eyebrow}
            title={TEAM_WORDING.title}
          />
          <Typography variant="body1">{TEAM_WORDING.content}</Typography>
        </Box>
      </Container>
      <Container size="md" sx={{ my: 10 }}>
        <Grid container spacing={3}>
          {TEAM_WORDING.team.map((t) => (
            <Grid item key={t.name} xs={12} md={6}>
              <TeamMember
                image={t.image}
                name={t.name}
                role={t.role}
                github={t.github}
                twitter={t.twitter}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container size="sm" sx={{ textAlign: 'center' }}>
        <Eyebrow color="blue.100" text={TEAM_WORDING.join.eyebrow} />
        <Typography variant="h5">{TEAM_WORDING.join.subtitle}</Typography>
        <Typography variant="body1" component="div">
          <MarkdownRender>{TEAM_WORDING.join.content}</MarkdownRender>
        </Typography>
      </Container>
    </Section>
  );
};
