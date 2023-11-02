import { AppHeader } from '@corva/ui/components';

import { DEFAULT_SETTINGS } from './constants';

import { useStyles } from './styles'; // Import useStyles
import Logo from './assets/logo.svg';
import useWitsData from './hooks/useWitsDataWithSubscription';

/**
 * @param {Object} props
 * @param {boolean} props.isExampleCheckboxChecked
 * @param {Object} props.appHeaderProps
 * @returns
 */
function App({
  isExampleCheckboxChecked = DEFAULT_SETTINGS.isExampleCheckboxChecked,
  appHeaderProps,
}) {
  const classes = useStyles(); // Use useStyles
  const assetId = 43775702;
  const { loading, witsData } = useWitsData({ assetId });

  console.log('loading', loading);
  console.log('witsData', witsData);

  return (
    <div className={classes.container}>
      <AppHeader {...appHeaderProps} logoSrc={Logo} />
      <div className={classes.content}>
        <div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
        <div>
          Settings &quot;Example&quot; checkbox is{' '}
          {isExampleCheckboxChecked ? 'checked' : 'unchecked'}
        </div>
      </div>
    </div>
  );
}

// Important: Do not change root component default export (App.js). Use it as container
//  for your App. It's required to make build and zip scripts work as expected;
export default App;
