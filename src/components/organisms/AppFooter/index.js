import moment from 'moment';
import { useStyles } from './styles';

function AppFooter() {
  const classes = useStyles();

  return (
    <section className={classes.footer}>
      <span data-testid="footer_last_update">
        Last Update: {moment().format('MM/DD/YYYY hh:mm a')}
      </span>
    </section>
  );
}

export default AppFooter;
