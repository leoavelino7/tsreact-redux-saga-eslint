import React, { useContext } from 'react';

import { ThemeContext } from '../../providers/ThemeProvider';

export function ThemeButton(){
  const { theme, setTheme } = useContext(ThemeContext);

  function swapTheme() {
    console.log("ola", theme);
    
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }

    console.log(theme);
    
  };

  return (
    <button onClick={swapTheme}>
      {theme === 'light' ? 'Change to dark mode' : 'Change to light mode'}
    </button>
  );
}