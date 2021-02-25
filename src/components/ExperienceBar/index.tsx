import { useContext, useMemo } from 'react';

import { ChallengesContext } from '../../hooks/challenges';

import * as S from './styles';

const ExperienceBar = () => {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext,
  );

  const percentToNextLevel = useMemo(
    () => Math.round(currentExperience * 100) / experienceToNextLevel,
    [currentExperience, experienceToNextLevel],
  );

  return (
    <S.Container>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />

        <span style={{ left: `${percentToNextLevel}%` }}>
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </S.Container>
  );
};

export default ExperienceBar;
