import ToggleTheme from '../ToggleTheme';
import * as S from './styles';

const Profile = () => {
  return (
    <S.Container>
      <img src="https://github.com/gabrielitba.png" alt="Uma foto de perfil" />
      <div>
        <strong>Gabriel Ferreira</strong>
        <p>
          <img src="icons/level.svg" alt="Uma flecha apontando para cima" />
          Level 1
        </p>
      </div>
      <ToggleTheme />
    </S.Container>
  );
};

export default Profile;
