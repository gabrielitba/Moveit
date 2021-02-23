import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global';

import { useTheme } from './hooks/theme';

import ExperienceBar from './components/ExperienceBar';

function App() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ExperienceBar />
    </ThemeProvider>
  );
}

export default App;
