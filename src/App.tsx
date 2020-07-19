import React from 'react';

import { ThemeProvider } from 'styled-components';

import light from './styles/themes/light';

import GlobalStyles from './styles/global';

import Main from './pages/Main';

const App: React.FC = () => (
  <ThemeProvider theme={light}>
    <GlobalStyles />
    <Main />
  </ThemeProvider>
);

export default App;
