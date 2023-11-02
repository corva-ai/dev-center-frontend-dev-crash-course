import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: '12px 12px 30px 12px',
  },
  content: {
    background: theme.palette.background.b9,
    color: theme.palette.primary.t9,
    display: 'flex',
    flexDirection: theme.isLightTheme ? 'row' : 'column',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    overflow: 'auto',
    gap: 8,
  },
}));
