import React, { createContext } from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider, createMuiTheme, Theme } from '@material-ui/core/styles'

import { useLocalStorage } from '~/data/hooks/useLocalStorage'
import { useTheme } from '~/data/hooks/useTheme'

interface ContextProps {
  currentTheme: string
  setTheme(theme: string): void
  configTheme: Theme
}

export const CustomThemeContext = createContext<ContextProps>({
  currentTheme: 'light',
  configTheme: useTheme('light'),
  setTheme: () => true,
})

interface Props {
  children: React.ReactNode
}

const CustomThemeProvider = ({ children }: Props) => {
  const [themeName, setThemeName] = useLocalStorage('@app/theme', 'light')

  const configTheme = useTheme(themeName)

  const contextValue = {
    currentTheme: themeName,
    setTheme: setThemeName,
    configTheme,
  }

  const theme = React.useMemo(() => {
    return createMuiTheme({
      ...configTheme,
    })
  }, [configTheme])

  return (
    <CustomThemeContext.Provider value={contextValue}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </CustomThemeContext.Provider>
  )
}

export default CustomThemeProvider
