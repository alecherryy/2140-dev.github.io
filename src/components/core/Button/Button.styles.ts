import { SystemStyleObject } from '@mui/system';
import { colors } from 'theme/colors';
import Arrow from '../../../images/icon-arrow-right.svg';

export const buttonSx: SystemStyleObject = {
  alignItems: 'center',
  display: 'inline-flex',
  fontWeight: 400,
  height: 64,
  p: 0,
  gap: 1,
  textAlign: 'center',
  textTransform: 'none',
  position: 'relative',
  '&:hover': {
    backgroundColor: 'transparent',
    svg: {
      transform: 'rotate(0deg)',
    },
    '&::after': {
      background: colors.yellow[400],
      backgroundImage: `url(${Arrow})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    },
  },
  svg: {
    transform: 'rotate(205deg)',
    transition: 'all 0.5s ease-in-out',
  },
  '&::after': {
    content: '""',
    background: colors.yellow[200],
    backgroundImage: `url(${Arrow})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    borderRadius: 40,
    height: 40,
    position: 'absolute',
    right: 12,
    transition: 'all 0.2s ease-in',
    width: 40,
  },
};
