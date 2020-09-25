import React from 'react'
import { IntlProvider } from 'react-intl'
import { Provider } from 'react-redux'

import { useLanguage } from '~/data/hooks/useLanguage'

import store from '~/data/store'

import Routes from '~/ui/routes'

function App() {
  const [language, setLanguage, messageLanguage] = useLanguage()

  function changeLanguage(newLanguage: string) {
    setLanguage(newLanguage)
  }

  return (
    <IntlProvider locale={language} messages={messageLanguage}>
      <Provider store={store}>
        <Routes changeLanguage={changeLanguage} />
      </Provider>
    </IntlProvider>
  )
}

export default App
