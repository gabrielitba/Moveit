import {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
  useCallback,
  ReactNode,
} from 'react';

import { ChallengesContext } from './challenges';

// import { useLevelContext } from './challenges';

interface CountdownContextData {
  minutes: number;
  seconds: number;
  isActive: boolean;
  hasFinished: boolean;
  startCountdown: () => void;
  resetCountdown: () => void;
}

interface CountdownProviderProps {
  children: ReactNode;
}

const INITIAL_TIMER = 25 * 60; // 3

export const CountdownContext = createContext({} as CountdownContextData);

// let countdownTimeout: ReturnType<typeof setTimeout>;

export const CountdownProvider = ({ children }: CountdownProviderProps) => {
  const { handleNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(INITIAL_TIMER);

  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const countDownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startCountdown = useCallback(() => {
    setIsActive(true);
  }, []);

  const resetCountdown = useCallback(() => {
    clearTimeout(countDownTimeout.current);
    setIsActive(false);
    setHasFinished(false);
    setTime(INITIAL_TIMER);
  }, []);

  useEffect(() => {
    if (isActive && time > 0) {
      countDownTimeout.current = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      handleNewChallenge();
    }
  }, [isActive, time, handleNewChallenge]);

  return (
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        isActive,
        hasFinished,
        startCountdown,
        resetCountdown,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
};
