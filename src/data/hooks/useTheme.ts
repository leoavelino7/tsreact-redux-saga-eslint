import darkTheme from '~/ui/styles/darkTheme'
import lightTheme from '~/ui/styles/lightTheme'

const themes = {
  lightTheme,
  darkTheme,
}

export function useTheme(theme: string) {
  switch (theme) {
    case 'dark':
      return themes.darkTheme

    default:
      return themes.lightTheme
  }
}
