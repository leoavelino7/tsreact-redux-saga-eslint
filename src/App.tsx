import React from 'react';
import { Provider } from 'react-redux'

import store from './data/store'
import { ThemeProvider } from './ui/providers/ThemeProvider';

import Routes from './ui/routes';
import {GlobalStyles} from './ui/styles/global'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <ThemeProvider>
        <Routes />
      </ThemeProvider>
    </Provider>
  )
}

export default App