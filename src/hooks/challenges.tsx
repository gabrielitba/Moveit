import { createContext, useCallback, useState, ReactNode } from 'react';

interface ChallengesContextProps {
  level: number;
  handleLevelUp: () => void;
  challengesCompleted: number;
  handleNewChallenge: () => void;
  currentExperience: number;
}

export const ChallengesContext = createContext({} as ChallengesContextProps);

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesProvider = ({ children }: ChallengesProviderProps) => {
  const [level, setLevel] = useState(1);
  const [challengesCompleted, setChanllengesCompleted] = useState(0);
  const [currentExperience, setCurrentExperience] = useState(0);

  const handleLevelUp = useCallback(() => {
    setLevel(level + 1);
  }, [level, setLevel]);

  const handleNewChallenge = useCallback(() => {
    console.log('New challenge');
  }, []);

  return (
    <ChallengesContext.Provider
      value={{
        level,
        handleLevelUp,
        challengesCompleted,
        handleNewChallenge,
        currentExperience,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
};
