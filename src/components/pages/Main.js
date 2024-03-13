import MainContentTemplate from '../templates/MainContent';

import useFilters from '../../hooks/useFilters';
import useWitsData from '../../hooks/useWitsDataWithSubscription';

function App({ appHeaderProps, companyId, coordinates, wells }) {
  const assetId = wells[0].asset_id;
  const {
    loading: stateOptionsLoading,
    stateOptions,
    onStateOptionsChange,
    stateOptionSelected,
  } = useFilters({
    companyId,
    assetId,
  });

  console.log('Selected option: ', stateOptionSelected);
  // We pass the selected state option in the select component to the useWitsData hook, make a query based on this value
  const { loading: witsLoading, witsData } = useWitsData({
    assetId,
    companyId,
    stateOptionSelected,
  });
  console.log('Fetched witsData based on the filter: ', witsData);

  return (
    <MainContentTemplate
      appHeaderProps={appHeaderProps}
      coordinates={coordinates}
      loading={stateOptionsLoading && witsLoading}
      witsData={witsData}
      // This is when it gets a little tricky because we need to pass the stateOptions, stateOptionSelected and onStateOptionsChange to the select component from the MainContentTemplate component.
      // There are better ways of doing this, but for the sake of simplicity, we will pass them as props.
      stateOptions={stateOptions}
      onStateOptionsChange={onStateOptionsChange}
      stateOptionSelected={stateOptionSelected}
    />
  );
}

// Important: Do not change root component default export (App.js). Use it as container
//  for your App. It's required to make build and zip scripts work as expected;
export default App;
