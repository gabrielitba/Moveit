import Head from 'next/head';

import { GlobalStyles } from '../styles/global';

import { ThemeProvider } from 'styled-components';
import { useTheme } from '../hooks/theme';

import CompletedChallenges from '../components/CompletedChallenges';
import Countdown from '../components/Countdown';
import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';
import ChallengeBox from '../components/ChallengeBox';

import * as S from '../styles/pages/Home';

const Home = () => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <S.Container>
        <GlobalStyles />
        <Head>
          <title>Início | move.it</title>
        </Head>

        <ExperienceBar />
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </S.Container>
    </ThemeProvider>
  );
};

export default Home;
