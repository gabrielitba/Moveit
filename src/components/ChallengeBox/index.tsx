import { useContext, useCallback } from 'react';

import { ChallengesContext } from '../../context/challenges';
import { CountdownContext } from '../../context/countdown';

import * as S from './styles';

const ChallengeBox = () => {
  const {
    activeChallenge,
    handleResetChallenge,
    handleCompletedChallenge,
  } = useContext(ChallengesContext);

  const { resetCountdown } = useContext(CountdownContext);

  const handleChallengeSucceeded = useCallback(() => {
    handleCompletedChallenge();
    resetCountdown();
  }, [handleCompletedChallenge, resetCountdown]);

  const handleChallengeFailed = useCallback(() => {
    handleResetChallenge();
    resetCountdown();
  }, [handleResetChallenge, resetCountdown]);

  return (
    <S.Container>
      {activeChallenge ? (
        <S.challengeActive>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img
              src={`icons/${activeChallenge.type}.svg`}
              alt="Uma mão com halter"
            />
            <strong>Novo Desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button onClick={handleChallengeFailed} type="button">
              Falhei
            </button>
            <button onClick={handleChallengeSucceeded} type="button">
              Completei
            </button>
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
