import Main from './components/pages/Main';

function App(props) {
  console.log('App props', props);
  const { appHeaderProps, coordinates, currentUser, wells } = props;
  const companyId = currentUser?.company_id;
  return (
    <Main
      appHeaderProps={appHeaderProps}
      companyId={companyId}
      coordinates={coordinates}
      wells={wells}
    />
  );
}

// Important: Do not change root component default export (App.js). Use it as container
//  for your App. It's required to make build and zip scripts work as expected;
export default App;
