import Head from 'next/head';

import { CountdownProvider } from '../../../context/countdown';

import CompletedChallenges from '../../../components/CompletedChallenges';
import Countdown from '../../../components/Countdown';
import ExperienceBar from '../../../components/ExperienceBar';
import Profile from '../../../components/Profile';
import ChallengeBox from '../../../components/ChallengeBox';

import * as S from './styles';

const HomePage = () => {
  return (
    <S.Container>
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
  );
};

export default HomePage;
