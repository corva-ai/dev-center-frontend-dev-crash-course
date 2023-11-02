import { AppHeader, LoadingIndicator } from '@corva/ui/components';
import { useStyles } from './styles';
import Logo from '../../../assets/logo.svg';

import AppFooter from '../../organisms/AppFooter';

export default function MainContentTemplate({ appHeaderProps, loading, witsData }) {
  const classes = useStyles();

  console.log('loading', loading);
  console.log('witsData', witsData);

  if (loading) return <LoadingIndicator />;

  return (
    <div className={classes.container} data-testid="main-container">
      <AppHeader {...appHeaderProps} logoSrc={Logo} />
      <div className={classes.content}>Hola!</div>
      <AppFooter />
    </div>
  );
}
