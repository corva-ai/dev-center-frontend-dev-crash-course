import { AppHeader } from '@corva/ui/components';

import { DEFAULT_SETTINGS } from './constants';
import logo from './assets/logo.svg';

import styles from './App.css';

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
  return (
    <div className={styles.container}>
      <AppHeader {...appHeaderProps} />
      <div className={styles.content}>
        <div>
          <img src={logo} alt="logo" className={styles.logo} />
          <p>
            Edit <code>src/App.js</code> and save to reload.
            <br />
            <br />
          </p>
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
