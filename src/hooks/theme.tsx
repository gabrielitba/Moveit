import { createContext, useContext, useState } from 'react';

import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

interface ChildrenTheme {
  children?: React.ReactNode;
}
interface ThemeContextProps {
  toggleTheme(): void;
  theme: Theme;
}

interface Theme {
  title: string;

  colors: {
    white: string;
    background: string;
    grayLine: string;
    text: string;
    textHighlight: string;
    title: string;
    red: string;
    green: string;
    blue: string;
    blueDark: string;
    blueTwitter: string;
  };
}

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

const ThemeProvider = ({ children }: ChildrenTheme) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (process.browser) {
      const themeSaved = localStorage.getItem('@moveit:theme');
      if (themeSaved) {
        return JSON.parse(themeSaved);
      } else {
        return light;
      }
    }
  });

  const toggleTheme = () => {
    if (process.browser) {
      if (theme.title === 'dark') {
        setTheme(light);
        localStorage.setItem('@moveit:theme', JSON.stringify(light));
      } else {
        setTheme(dark);
        localStorage.setItem('@moveit:theme', JSON.stringify(dark));
      }
    }
  };
  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

function useTheme(): ThemeContextProps {
  const context = useContext(ThemeContext);

  return context;
}

export { ThemeProvider, useTheme };
