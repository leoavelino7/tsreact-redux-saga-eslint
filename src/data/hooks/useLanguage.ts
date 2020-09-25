import { localesMap } from '~/ui/locales'

import { useLocalStorage } from '~/data/hooks/useLocalStorage'

const INITIAL_POSITION = 0
const defaultLanguage: string = navigator.language.split(/[-_]/)[INITIAL_POSITION]

export function useLanguage() {
  const [language, setLanguage] = useLocalStorage('@app/language', defaultLanguage)

  return [language, setLanguage, localesMap.get(language) || localesMap.get('pt')]
}
