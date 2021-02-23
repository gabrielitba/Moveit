import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';

import * as S from '../styles/pages/Home';

const Home = () => {
  return (
    <S.Container>
      <ExperienceBar />
      <section>
        <Profile />
        <div></div>
      </section>
    </S.Container>
  );
};

export default Home;
