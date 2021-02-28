import {
  useState,
  useEffect,
  useCallback,
  useMemo,
  createContext,
  ReactNode,
} from 'react';

import Cookies from 'js-cookie';

import Modal from '../components/Modal';

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
  handleCompletedChallenge: () => void;
  experienceToNextLevel: number;
  handleCloseModal: () => void;
}

export const ChallengesContext = createContext({} as ChallengesContextProps);

interface ChallengesProviderProps {
  children: ReactNode;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export const ChallengesProvider = ({
  children,
  ...rest
}: ChallengesProviderProps) => {
  const [level, setLevel] = useState(rest.level ?? 1);
  const [challengesCompleted, setChanllengesCompleted] = useState(
    rest.challengesCompleted ?? 0,
  );
  const [currentExperience, setCurrentExperience] = useState(
    rest.currentExperience ?? 0,
  );

  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceToNextLevel = useMemo(() => Math.pow((level + 1) * 4, 2), [
    level,
  ]);

  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = useCallback(() => {
    setOpenModal(false);
  }, []);

  const handleLevelUp = useCallback(() => {
    setLevel(level + 1);
    setOpenModal(true);
  }, [level, setLevel]);

  const handleNewChallenge = useCallback(() => {
    const randomChallengerIndex = Math.floor(Math.random() * challenges.length);

    const challenge = challenges[randomChallengerIndex];

    setActiveChallenge(challenge);

    new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio 🎉', {
        body: `Valendo ${challenge.amount}xp`,
      });
    }
  }, []);

  const handleResetChallenge = useCallback(() => {
    setActiveChallenge(null);
  }, []);

  const handleCompletedChallenge = useCallback(() => {
    if (!activeChallenge) return;

    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      handleLevelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChanllengesCompleted(challengesCompleted + 1);
  }, [
    activeChallenge,
    challengesCompleted,
    currentExperience,
    experienceToNextLevel,
    handleLevelUp,
  ]);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  useEffect(() => {
    Cookies.set('level', String(level));
    Cookies.set('currentExperience', String(currentExperience));
    Cookies.set('challengesCompleted', String(challengesCompleted));
  }, [challengesCompleted, currentExperience, level]);

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
        handleCompletedChallenge,
        experienceToNextLevel,
        handleCloseModal,
      }}
    >
      {children}
      {openModal && <Modal />}
    </ChallengesContext.Provider>
  );
};
