import MainContentTemplate from '../templates/MainContent';

import useWitsData from '../../hooks/useWitsDataWithSubscription';

function App({ appHeaderProps, companyId, coordinates, wells }) {
  const assetId = wells[0].asset_id;
  const { loading, witsData, witsCompanyData } = useWitsData({ assetId, companyId });
  console.log('witsData', witsData);
  console.log('witsCompanyData', witsCompanyData);

  return (
    <MainContentTemplate
      appHeaderProps={appHeaderProps}
      coordinates={coordinates}
      loading={loading}
      witsData={witsData}
    />
  );
}

// Important: Do not change root component default export (App.js). Use it as container
//  for your App. It's required to make build and zip scripts work as expected;
export default App;
