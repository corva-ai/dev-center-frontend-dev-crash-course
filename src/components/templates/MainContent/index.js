import { AppHeader } from '@corva/ui/components';
import { useStyles } from './styles';
import Logo from '../../../assets/logo.svg';

import AppFooter from '../../organisms/AppFooter';
import LineChart from '../../organisms/LineChart';
import Filters from '../../organisms/Filters';

import { prepareHighchartData } from '../../../utils/index';

export default function MainContentTemplate({ appHeaderProps, coordinates, loading, witsData }) {
  const classes = useStyles();

  const series = [{ data: prepareHighchartData(witsData) }];

  return (
    <div className={classes.container} data-testid="main-container">
      <AppHeader {...appHeaderProps} logoSrc={Logo} />
      <Filters data={witsData} />
      <div className={classes.content}>
        <LineChart coordinates={coordinates} series={series} />
      </div>
      <AppFooter />
    </div>
  );
}
