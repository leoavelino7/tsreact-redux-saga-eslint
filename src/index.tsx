import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import CustomThemeProvider from './ui/providers/CustomThemeProvider';

ReactDOM.render(
  <React.StrictMode>
    <CustomThemeProvider>
      <App />
    </CustomThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
