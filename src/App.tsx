import React from 'react';
import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl';

import store from './data/store'

import Routes from './ui/routes';

import { useLanguage } from './data/hooks/useLanguage';

function App() {
  const [language, setLanguage, messageLanguage] = useLanguage()
  
  function changeLanguage(newLanguage: string){
    setLanguage(newLanguage)
  }

  return (
      <IntlProvider
        locale={language}
        messages={messageLanguage}
      >
        <Provider store={store}>
              <Routes changeLanguage={changeLanguage} />
        </Provider>
    </IntlProvider>
  )
}

export default App