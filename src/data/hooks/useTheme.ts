import lightTheme from '../../ui/styles/lightTheme'
import darkTheme from '../../ui/styles/darkTheme'

const themes = {
  lightTheme,
  darkTheme,
}

export function useTheme(theme: string) {
  switch(theme){
    case 'dark':
      return themes.darkTheme

    default:
      return themes.lightTheme
  }
}