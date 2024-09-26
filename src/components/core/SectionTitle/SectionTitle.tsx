import { Box, SxProps, Typography } from '@mui/material';
import Line from '../../../images/strikethrough.svg';
import { MarkdownRender } from 'components/core/MarkdownRenderer/MarkdownRenderer';
import { Eyebrow } from 'components/core/Eyebrow/Eyebrow';

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
            // right: '-0.5rem',
            height: '1rem',

            // Position the line behind the text so that
            // it is still easily readable
            zIndex: 1,
            width: '105%',
            backgroundImage: `url('${Line}')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
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
