import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    overflow: 'scroll',
    position: 'relative',
    width: '100%',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    '&::before': {
      background: theme.isLightTheme
        ? 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)'
        : 'linear-gradient(to bottom, rgba(33, 33, 33, 0) 0%, rgba(33, 33, 33, 1) 100%)',
      content: '""',
      display: 'block',
      height: 0,
      left: 0,
      position: 'fixed',
      right: 0,
      zIndex: 1,
    },
  },
}));
