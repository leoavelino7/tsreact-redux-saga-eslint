import React, { createContext } from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { useLocalStorage } from '../../data/hooks/useLocalStorage'
import { useTheme } from '../../data/hooks/useTheme'

interface ContextProps {
  currentTheme: string
  setTheme: Function
  configTheme: any
}

export const CustomThemeContext = createContext<ContextProps>({
  currentTheme: 'light',
  configTheme: useTheme('light'),
  setTheme: () =>  null
})

interface Props {
  children: React.ReactNode;
}

const CustomThemeProvider = ({ children }: Props) => {
  const [themeName, setThemeName] = useLocalStorage('@app/theme', 'light')
  
  const configTheme = useTheme(themeName)

  const contextValue = {
    currentTheme: themeName,
    setTheme: setThemeName,
    configTheme
  }

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        ...configTheme
      }),
    [configTheme],
  );

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