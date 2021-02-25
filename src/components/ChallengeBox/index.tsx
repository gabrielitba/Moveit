import { useContext } from 'react';

import { ChallengesContext } from '../../hooks/challenges';

import * as S from './styles';

const ChallengeBox = () => {
  const contextData = useContext(ChallengesContext);

  console.log(contextData);

  const isActive = true;

  return (
    <S.Container>
      {isActive ? (
        <S.challengeActive>
          <header>Ganhe 400 xp</header>

          <main>
            <img src="icons/body.svg" alt="Uma mão com halter" />
            <strong>Novo Desafio</strong>
            <p>Faça uma caminhada</p>
          </main>

          <footer>
            <button type="button">Falhei</button>
            <button type="button">Completei</button>
          </footer>
        </S.challengeActive>
      ) : (
        <S.ChallengeNotActive>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios.
          </p>
        </S.ChallengeNotActive>
      )}
    </S.Container>
  );
};

export default ChallengeBox;
