import { useLocalStorage } from './useLocalStorage';

import { messages } from './../../ui/locales';

const messageLanguage: any = messages

const defaultLanguage: string = navigator.language.split(/[-_]/)[0];

export function useLanguage(){
  const [language, setLanguage] = useLocalStorage('@app/language', defaultLanguage)
  
  return [language, setLanguage, messageLanguage[language]];
}