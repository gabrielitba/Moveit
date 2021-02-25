import { ReactNode } from 'react';

import { ThemeProvider } from './theme';
import { ChallengesProvider } from './challenges';

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => (
  <ChallengesProvider>
    <ThemeProvider>{children}</ThemeProvider>
  </ChallengesProvider>
);

export default AppProvider;
