import React from 'react'
import ReactDOM from 'react-dom'

import CustomThemeProvider from '~/ui/providers/CustomThemeProvider'

import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <CustomThemeProvider>
      <App />
    </CustomThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
