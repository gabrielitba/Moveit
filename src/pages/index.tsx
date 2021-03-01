import { GetServerSideProps } from 'next';

import { GlobalStyles } from '../styles/global';

import { ThemeProvider } from 'styled-components';
import { useTheme } from '../context/theme';

import { ChallengesProvider } from '../context/challenges';

import HomePage from '../templates/HomePage';

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
        <GlobalStyles />
        <HomePage />
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
