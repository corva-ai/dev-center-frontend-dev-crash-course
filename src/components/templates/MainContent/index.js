import { AppHeader, LoadingIndicator } from '@corva/ui/components';
import { useStyles } from './styles';
import Logo from '../../../assets/logo.svg';

import AppFooter from '../../organisms/AppFooter';
import LineChart from '../../organisms/LineChart';
import Filters from '../../organisms/Filters';

import { prepareHighchartData } from '../../../utils/index';

export default function MainContentTemplate({
  appHeaderProps,
  coordinates,
  loading,
  witsData,
  stateOptions,
  onStateOptionsChange,
  stateOptionSelected,
}) {
  const classes = useStyles();

  const series = [{ data: prepareHighchartData(witsData) }];

  if (loading) return <LoadingIndicator />;

  // We group different organisms and/or molecules that we want to show in this template (view).
  // Here you should put the polar graph, the table and the map along side with the filters.
  return (
    <div className={classes.container} data-testid="main-container">
      <AppHeader {...appHeaderProps} logoSrc={Logo} />
      <Filters onChange={onStateOptionsChange} options={stateOptions} value={stateOptionSelected} />
      <div className={classes.content}>
        <LineChart coordinates={coordinates} series={series} />
      </div>
      <AppFooter />
    </div>
  );
}
