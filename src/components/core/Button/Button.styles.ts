import { SystemStyleObject } from '@mui/system';
import { colors } from 'theme/colors';
import Arrow from '../../../images/icon-arrow-right.svg';

export const commonButtonSx: SystemStyleObject = {
  alignItems: 'center',
  display: 'inline-flex',
  gap: 1,
  textTransform: 'none',
  span: {
    alignItems: 'center',
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    '&::after': {
      content: '""',
      background: colors.yellow[200],
      backgroundImage: `url(${Arrow})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      borderRadius: 40,
      height: 40,
      position: 'absolute',
      transition: 'all 0.2s cubic-bezier(0.83, 0, 0.17, 1)',
      width: 40,
    },
  },
  svg: {
    transform: 'rotate(205deg)',
    transition: 'all 0.5s cubic-bezier(0.83, 0, 0.17, 1)',
  },
};

export const buttonVariantSx: Record<
  'default' | 'bigButton',
  SystemStyleObject
> = {
  default: {
    fontWeight: 400,
    height: 64,
    p: 0,
    '&:hover': {
      backgroundColor: 'transparent',
      svg: {
        transform: 'rotate(0deg)',
      },
      span: {
        '&::after': {
          background: colors.yellow[400],
          backgroundImage: `url(${Arrow})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        },
      },
    },
  },
  bigButton: {
    backgroundColor: colors.yellow[200],
    fontWeight: 600,
    borderRadius: 100,
    fontSize: '2rem',
    letterSpacing: 5,
    height: 100,
    px: 10,
    span: {
      alignItems: 'center',
      display: 'flex',
      position: 'relative',
      justifyContent: 'center',
      '&::after': {
        content: '""',
        background: colors.yellow[400],
        backgroundImage: `url(${Arrow})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: 40,
        height: 40,
        position: 'absolute',
        transition: 'all 0.2s cubic-bezier(0.83, 0, 0.17, 1)',
        width: 40,
      },
    },
    '&:hover': {
      backgroundColor: '#ececec',
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
  },
};
