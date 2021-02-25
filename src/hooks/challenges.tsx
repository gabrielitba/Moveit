import {
  createContext,
  useCallback,
  useState,
  useMemo,
  ReactNode,
} from 'react';

import challenges from '../../challenges.json';

type ChallengeType = {
  BODY: 'body';
  EYE: 'eye';
};

interface Challenge {
  type: ChallengeType;
  description: string;
  amount: number;
}
interface ChallengesContextProps {
  level: number;
  handleLevelUp: () => void;
  challengesCompleted: number;
  currentExperience: number;
  activeChallenge: Challenge;
  handleNewChallenge: () => void;
  handleResetChallenge: () => void;
  experienceToNextLevel: number;
}

export const ChallengesContext = createContext({} as ChallengesContextProps);

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesProvider = ({ children }: ChallengesProviderProps) => {
  const [level, setLevel] = useState(1);
  const [challengesCompleted, setChanllengesCompleted] = useState(0);
  const [currentExperience, setCurrentExperience] = useState(30);

  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceToNextLevel = useMemo(() => Math.pow((level + 1) * 4, 2), [
    level,
  ]);

  const handleLevelUp = useCallback(() => {
    setLevel(level + 1);
  }, [level, setLevel]);

  const handleNewChallenge = useCallback(() => {
    const randomChallengerIndex = Math.floor(Math.random() * challenges.length);

    const challenge = challenges[randomChallengerIndex];

    setActiveChallenge(challenge);
  }, []);

  const handleResetChallenge = useCallback(() => {
    setActiveChallenge(null);
  }, []);

  return (
    <ChallengesContext.Provider
      value={{
        level,
        handleLevelUp,
        challengesCompleted,
        currentExperience,
        activeChallenge,
        handleNewChallenge,
        handleResetChallenge,
        experienceToNextLevel,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
};
