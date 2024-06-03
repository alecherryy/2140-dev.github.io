import React from 'react';
import { Box, Link, List, ListItem, Typography } from '@mui/material';
import { cardSx, imageSx, linkSx, svgSx } from './TeamMember.styles';
import { colors } from '../../../theme/colors';
import Github from '../../../images/icons/github.svg';
import X from '../../../images/icons/twitter.svg';

type Props = {
  image: string;
  name: string;
  role: string;
  twitter?: string;
  github?: string;
};
export const TeamMember = ({ image, name, role, twitter, github }: Props) => {
  return (
    <Box sx={cardSx}>
      <Box sx={imageSx}>
        <Box sx={svgSx}>
          <OutlineCircle />
        </Box>
        <figure>
          <img src={image} alt={name} />
        </figure>
      </Box>
      <Box>
        <Typography variant="h6" mb={0.5}>
          {name}
        </Typography>
        <Typography variant="body2">{role}</Typography>
        {github && twitter && (
          <List sx={{ display: 'flex', gap: 2 }}>
            {github && (
              <ListItem sx={{ p: 0, width: 24 }}>
                <Link sx={linkSx} target="_blank" href={github}>
                  <img src={Github} alt="Github icon" />
                </Link>
              </ListItem>
            )}
            {twitter && (
              <ListItem sx={{ p: 0, width: 24 }}>
                <Link sx={linkSx} target="_blank" href={twitter}>
                  <img src={X} alt="X icon" />
                </Link>
              </ListItem>
            )}
          </List>
        )}
      </Box>
    </Box>
  );
};

const OutlineCircle = () => {
  return (
    <svg width="110" height="110" viewBox="0 0 110 110" fill="none">
      <circle
        cx="55"
        cy="55"
        r="54.5"
        style={{
          stroke: colors.yellow[400],
          strokeWidth: 1,
          strokeDasharray: 280,
        }}
      />
    </svg>
  );
};
