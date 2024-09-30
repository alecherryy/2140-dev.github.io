import React from 'react';
import Arrow from '../../../images/caret.svg';
import {
  Accordion as MuiAccordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Box,
  SxProps,
} from '@mui/material';
import { MarkdownRender } from 'components/core/MarkdownRenderer/MarkdownRenderer';

interface Props {
  items: { title: string; content: string }[];
  sx?: SxProps;
}
export const Accordion = ({ items, sx }: Props) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const onChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box sx={sx}>
      {items.map((item, index) => (
        <MuiAccordion
          expanded={expanded === `${index}`}
          onChange={onChange(`${index}`)}
          sx={{
            boxShadow: 'none',
            border: `solid 1px rgba(0, 0, 0, 0.08)`,
            borderRadius: '1rem !important',
            m: 0,
            p: 0,
            my: '0.75rem !important',
            transition: 'all 0.4s ease-in',
            overflow: 'hidden',
            '&:hover': {
              backgroundColor: 'yellow.50',
            },
            '&::before': {
              display: 'none',
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandIcon />}
            aria-controls={`${index}`}
            id={`${index}`}
            sx={{
              m: '0 !important',
              p: '1.5rem !important',
              '.MuiAccordionSummary-content': {
                m: '0 !important',
                pr: '1rem !important',
              },
              '&.Mui-expanded': {
                backgroundColor: 'yellow.50',
              },
            }}
          >
            <Typography variant="h6" sx={{ mb: 0 }}>
              {item.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{ p: 2.5, pt: 0, backgroundColor: 'yellow.50' }}
          >
            <Typography sx={{ mb: 0 }}>
              <MarkdownRender>{item.content}</MarkdownRender>
            </Typography>
          </AccordionDetails>
        </MuiAccordion>
      ))}
    </Box>
  );
};

const ExpandIcon = () => {
  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        height: 20,
        width: 20,
      }}
    >
      <img src={Arrow} />
    </Box>
  );
};
