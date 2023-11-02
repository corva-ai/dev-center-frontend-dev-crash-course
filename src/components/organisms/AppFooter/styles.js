import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(({ palette }) => {
  return {
    footer: {
      backgroundColor: palette.background.b4,
      bottom: 0,
      color: palette.primary.text6,
      fontSize: '.625rem',
      height: ({ footerHeight }) => footerHeight,
      padding: '16px 12px',
      position: 'fixed',
      width: '100%',
      zIndex: 999,
    },
  };
});
