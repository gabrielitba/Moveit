import { ThemeProvider } from '../hooks/theme';
import { ChallengesProvider } from '../hooks/challenges';

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </ChallengesProvider>
  );
}

export default MyApp;
