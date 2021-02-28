import { ReactNode } from 'react';

import { ThemeProvider } from './theme';

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => (
  <ThemeProvider>{children}</ThemeProvider>
);

export default AppProvider;
