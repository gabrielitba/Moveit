import { ReactNode } from 'react';

import { ChallengesProvider } from './challenges';
import { CountdownProvider } from './countdown';
import { ThemeProvider } from './theme';

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => (
  <ChallengesProvider>
    <CountdownProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </CountdownProvider>
  </ChallengesProvider>
);

export default AppProvider;
