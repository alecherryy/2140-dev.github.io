import { Box, SxProps, Typography } from '@mui/material';
import Strikethrough from '../../../images/strikethrough.svg';
import { MarkdownRender } from 'components/core/MarkdownRenderer/MarkdownRenderer';
import { Eyebrow } from 'components/core/Eyebrow/Eyebrow';
import Underline from '../../../images/underline-white.svg';

type Props = {
  eyebrow: string;
  title: string;
  eyebrowColor?: string;
  sx?: SxProps;
};
export const SectionTitle = ({
  eyebrow,
  title,
  eyebrowColor = 'yellow.300',
  sx,
}: Props) => {
  return (
    <Box
      sx={{
        s: {
          textDecoration: 'none',
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: '-2.5%',
            height: '1rem',

            // Position the line behind the text so that
            // it is still easily readable
            zIndex: 1,
            width: '105%',
            backgroundImage: `url('${Strikethrough}')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
          },
        },
        u: {
          textDecoration: 'none',
          position: 'relative',
          zIndex: 1,
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: '-0.5rem',
            height: '1rem',
            zIndex: -1,
            width: '105%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundImage: `url('${Underline}')`,
          },
        },
        ...sx,
      }}
    >
      <Eyebrow text={eyebrow} color={eyebrowColor} />
      <Typography variant="h2">
        <MarkdownRender>{title}</MarkdownRender>
      </Typography>
    </Box>
  );
};
