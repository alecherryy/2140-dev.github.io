import { Box, SxProps, Typography } from '@mui/material';
import { colors } from '../../../theme/colors';
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
  eyebrowColor = 'yellow.200',
  sx,
}: Props) => {
  return (
    <Box sx={sx}>
      <Eyebrow text={eyebrow} color={eyebrowColor} />
      <Typography variant="h2">
        <MarkdownRender>{title}</MarkdownRender>
      </Typography>
    </Box>
  );
};
