import React from 'react';

import { LoginView } from './ui/views/LoginView'

import { Provider } from 'react-redux'
import store from './data/store'
import { HomeView } from './ui/views/HomeView';

function App() {
  return (
    <Provider store={store}>
      <LoginView />
      <HomeView />
    </Provider>
  )
}

export default App