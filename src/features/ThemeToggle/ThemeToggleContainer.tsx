import React, { useContext } from 'react';

import { IThemeContext, ThemeContext } from '../../themes';
import { ThemeToggleView } from './ThemeToggleView';

export const ThemeToggleContainer: React.FC = () => {
  const { isDarkTheme, toggleTheme } = useContext<IThemeContext>(ThemeContext);

  return (
    <ThemeToggleView isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
  );
};
