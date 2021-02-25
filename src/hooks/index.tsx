import { ReactNode } from 'react';

import { ThemeProvider } from './theme';
import { ChallengesProvider } from './challenges';
import { CountdownProvider } from './countdown';

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
