import { Toggle } from 'carbon-components-react';

interface ThemeToggleViewProps {
  isDarkTheme: boolean;
  toggleTheme: any;
}

export const ThemeToggleView: React.FC<ThemeToggleViewProps> = ({
  toggleTheme,
}) => {
  return (
    <Toggle
      labelText="Toggle element label"
      defaultToggled
      id="toggle-2"
      onClick={toggleTheme}
      labelA={'🌙'}
      labelB={'🔆'}
      aria-label="Dark mode toggle"
    />
  );
};
