import React, {createContext} from "react";
import { useLocalStorage } from "../../data/hooks/useLocalStorage";

import { GlobalStyles } from "../styles/global";

interface ContextProps {
  theme: string;
  setTheme: Function;
}

export const ThemeContext = createContext<ContextProps>({
  theme: '',
  setTheme: () => null,
});

interface Props {
  children: React.ReactNode;
}

export function ThemeProvider(props: Props){
  const [theme, setTheme] = useLocalStorage("theme", "light");

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <GlobalStyles theme={theme} />
      { props.children}
    </ThemeContext.Provider>
  );
}