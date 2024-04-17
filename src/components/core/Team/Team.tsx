import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { titleSx, wrapperSx } from './Team.styles';
import { Container } from '../../layouts/Container/Container';
import { TeamMember } from '../TeamMember/TeamMember';
import Josibake from '../../../images/josibake.jpg';
import Ruben from '../../../images/ruben.jpg';
import { SectionTitle } from '../../SectionTitle/SectionTitle';

export const Team = () => {
  return <Box sx={wrapperSx} id="team">
    <Container size="small">
      <Box sx={titleSx}>
        <SectionTitle
          eyebrow={TEAM_WORDING.eyebrow}
          title={TEAM_WORDING.title}
        />
        <Typography variant="body1">
          {TEAM_WORDING.content}
        </Typography>
      </Box>
    </Container>
    <Container size="medium" mt={10}>
      <Grid container spacing={3}>
        {TEAM_WORDING.team.map((t) => (
          <Grid item xs={12} md={6}>
            <TeamMember image={t.image} name={t.name} role={t.role} github={t.github} twitter={t.twitter}/>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
}

const TEAM_WORDING = {
  eyebrow: '02 — Team',
  title: 'Meet Our Contributors',
  content: `Comprising visionary Bitcoin Core developers, passionate technologists, and forward-thinking strategists, our
    team is united by a common goal: to advance and secure the Bitcoin network.`,
  team: [
    {
      name: 'josibake',
      role: 'Bitcoin Core Developer',
      twitter: 'https://twitter.com/josibake?lang=en',
      github: 'https://github.com/josibake',
      image: Josibake
    },
    {
      name: 'RubenSomsen',
      role: 'Bitcoin Sorcerer',
      twitter: 'https://twitter.com/SomsenRuben',
      github: 'https://gist.github.com/RubenSomsen',
      image: Ruben
    }
  ]
}