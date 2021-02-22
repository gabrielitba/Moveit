import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global';

import { useTheme } from './hooks/theme';

function App() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
