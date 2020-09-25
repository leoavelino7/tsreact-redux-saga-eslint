import React, { useContext } from 'react'

import { Button } from '@material-ui/core'

import { CustomThemeContext } from '~/ui/providers/CustomThemeProvider'

export function ThemeButton() {
  const { currentTheme, setTheme } = useContext(CustomThemeContext)

  const handleToogleTheme = () => {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Button variant="contained" color="secondary" onClick={handleToogleTheme}>
      Thema atual - {currentTheme}
    </Button>
  )
}
