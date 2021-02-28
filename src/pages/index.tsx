import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { GlobalStyles } from '../styles/global';

import { ThemeProvider } from 'styled-components';
import { useTheme } from '../context/theme';

import { ChallengesProvider } from '../context/challenges';
import { CountdownProvider } from '../context/countdown';

import CompletedChallenges from '../components/CompletedChallenges';
import Countdown from '../components/Countdown';
import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';
import ChallengeBox from '../components/ChallengeBox';

import * as S from '../styles/pages/Home';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

const Home = (props: HomeProps) => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <ChallengesProvider
        level={props.level}
        currentExperience={props.currentExperience}
        challengesCompleted={props.challengesCompleted}
      >
        <S.Container>
          <GlobalStyles />
          <Head>
            <title>Início | move.it</title>
          </Head>

          <ExperienceBar />
          <CountdownProvider>
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
          </CountdownProvider>
        </S.Container>
      </ChallengesProvider>
    </ThemeProvider>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
