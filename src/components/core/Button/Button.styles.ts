import { SystemStyleObject, SxProps } from '@mui/system';
import { colors } from 'theme/colors';
import Arrow from '../../../images/icon-arrow-right.svg';

const pseusdoSxProps: SxProps = {
  content: '""',
  background: colors.yellow[200],
  backgroundImage: `url(${Arrow})`,
  backgroundPosition: 'center',
  display: 'block',
  backgroundRepeat: 'no-repeat',
  borderRadius: 40,
  height: 40,
  position: 'absolute',
  transition: 'all 0.2s cubic-bezier(0.83, 0, 0.17, 1)',
  width: 40,
};

export const commonButtonSx: SystemStyleObject = {
  alignItems: 'center',
  display: 'inline-flex',
  gap: 1,
  textTransform: 'none',
  minWidth: 'auto',
  span: {
    alignItems: 'center',
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    height: 64,
    minWidth: 64,
    width: 64,
    '&::after': {
      ...pseusdoSxProps,
    },
  },
  svg: {
    transform: 'rotate(205deg)',
    transition: 'all 0.5s cubic-bezier(0.83, 0, 0.17, 1)',
  },
};

export const buttonVariantSx: Record<
  'primary' | 'secondary' | 'large',
  SystemStyleObject
> = {
  primary: {
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
  secondary: {
    backgroundColor: 'primary.main',
    color: colors.yellow[50],
    fontWeight: 600,
    borderRadius: 40,
    pl: 4,
    pr: 2,
    py: 0.5,
    span: {
      height: 40,
      minWidth: 40,
      width: 40,
      '&::after': { ...pseusdoSxProps, backgroundColor: 'transparent' },
    },
    '&:hover': {
      backgroundColor: 'yellow.200',
      // span: {
      //   '&::after': {
      //     backgroundImage: `url(${Arrow})`,
      //   },
      // },
    },
  },
  large: {
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
      backgroundColor: 'yellow.300',
      color: 'yellow.50',
      svg: {
        transform: 'rotate(0deg)',
      },
      span: {
        '&::after': {
          background: 'yellow.50',
          // backgroundImage: `url(${Arrow})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        },
      },
    },
  },
};
