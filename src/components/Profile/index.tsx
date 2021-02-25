import { useContext } from 'react';

import ToggleTheme from '../ToggleTheme';
import { ChallengesContext } from '../../hooks/challenges';

import * as S from './styles';

const Profile = () => {
  const { level } = useContext(ChallengesContext);

  return (
    <S.Container>
      <img src="https://github.com/gabrielitba.png" alt="Uma foto de perfil" />
      <div>
        <strong>Gabriel Ferreira</strong>
        <p>
          <img src="icons/level.svg" alt="Uma flecha apontando para cima" />
          Level {level}
        </p>
      </div>
      <ToggleTheme />
    </S.Container>
  );
};

export default Profile;
