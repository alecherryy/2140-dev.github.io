import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Container } from '../../layouts/Container/Container';
import { TeamMember } from '../TeamMember/TeamMember';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { TEAM_WORDING } from 'constants/wording';

export const Team = () => {
  return (
    <Box py={15} pb={30} id="team">
      <Container size="small">
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <SectionTitle
            eyebrow={TEAM_WORDING.eyebrow}
            title={TEAM_WORDING.title}
          />
          <Typography variant="body1">{TEAM_WORDING.content}</Typography>
        </Box>
      </Container>
      <Container size="medium" sx={{ mt: 10 }}>
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
    </Box>
  );
};
