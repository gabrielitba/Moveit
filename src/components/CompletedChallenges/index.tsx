import { useContext, useMemo } from 'react';

import { ChallengesContext } from '../../hooks/challenges';

import * as S from './styles';

const CompletedChallenges = () => {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <S.Container>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </S.Container>
  );
};

export default CompletedChallenges;
