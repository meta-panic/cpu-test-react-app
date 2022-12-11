import 'carbon-components/scss/globals/scss/styles.scss';

import React, { useEffect, useState } from 'react';

export interface IThemeContext {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

const defaultState = {
  isDarkTheme: false,
  toggleTheme: () => {},
};

export const ThemeContext = React.createContext<IThemeContext>(defaultState);

interface ThemeLayerProps {
  children: React.ReactNode;
}

const ThemeLayer = ({ children }: ThemeLayerProps) => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkTheme]);

  return (
    <ThemeContext.Provider
      value={{
        isDarkTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeLayer;
