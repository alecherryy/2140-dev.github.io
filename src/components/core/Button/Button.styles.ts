import { SystemStyleObject, SxProps } from '@mui/system';
import { colors } from 'theme/colors';
import Arrow from '../../../images/icons/arrow-right.svg';

const pseusdoSx: SxProps = {
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

const spanSx: SxProps = {
  alignItems: 'center',
  display: 'flex',
  position: 'relative',
  justifyContent: 'center',
  height: 64,
  minWidth: 64,
  width: 64,
};

export const commonButtonSx: SystemStyleObject = {
  alignItems: 'center',
  display: 'inline-flex',
  gap: 1,
  textTransform: 'none',
  minWidth: 'auto',
  span: {
    ...spanSx,
    '&::after': {
      ...pseusdoSx,
    },
  },
  svg: {
    transform: 'rotate(205deg)',
    transition: 'all 0.5s cubic-bezier(0.83, 0, 0.17, 1)',
  },
};

export const buttonVariantSx: Record<
  'primary' | 'secondary' | 'large' | 'donate',
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
    color: 'yellow.50',
    fontWeight: 600,
    borderRadius: 40,
    pl: 4,
    pr: 2,
    py: 0.5,
    span: {
      height: 40,
      minWidth: 40,
      width: 40,
      '&::after': { ...pseusdoSx, backgroundColor: 'transparent' },
    },
    '&:hover': {
      backgroundColor: 'yellow.200',
    },
  },
  large: {
    backgroundColor: 'yellow.200',
    fontWeight: 600,
    borderRadius: 100,
    fontSize: '2rem',
    letterSpacing: 5,
    height: 100,
    px: [5, 10],
    span: {
      ...spanSx,
      '&::after': {
        ...pseusdoSx,
        backgroundColor: colors.primary.main,
      },
    },
    '&:hover': {
      backgroundColor: 'yellow.300',
      color: 'yellow.50',
      span: {
        '&::after': {
          background: colors.primary.main,
          backgroundImage: `url(${Arrow})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        },
      },
      svg: {
        transform: 'rotate(0deg)',
      },
    },
  },
  donate: {
    backgroundColor: 'yellow.50',
    fontWeight: 600,
    borderRadius: 100,
    fontSize: '2rem',
    letterSpacing: 5,
    height: 100,
    px: [5, 10],
    width: ['100%', 'auto'],
    span: {
      ...spanSx,
      '&::after': {
        ...pseusdoSx,
        backgroundColor: colors.yellow[200],
      },
    },
    '&:hover': {
      backgroundColor: 'yellow.50',
      span: {
        '&::after': {
          background: colors.yellow[400],
          backgroundImage: `url(${Arrow})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        },
      },
      svg: {
        transform: 'rotate(0deg)',
      },
    },
  },
};
