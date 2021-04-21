import React from 'react';

import GlobalStyles from './styles/global';
import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

import GlobalProvider from './hooks';

const App: React.FC = () => (
  <>
    <GlobalProvider>
      <SignIn />
    </GlobalProvider>
    <GlobalStyles />
  </>
);

export default App;
