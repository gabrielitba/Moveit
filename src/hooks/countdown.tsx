import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';

// import { useLevelContext } from './challenges';

interface CountdownContextData {
  minutes: number;
  seconds: number;
  isActive: boolean;
  isFinished: boolean;
  startCountdown: () => void;
  resetCountdown: () => void;
}

interface CountdownProviderProps {
  children: ReactNode;
}

const INITIAL_TIMER = 2; // 25 * 60

const CountdownContext = createContext({});

let countdownTimeout: ReturnType<typeof setTimeout>;

export const CountdownProvider = ({ children }: CountdownProviderProps) => {
  return (
    <CountdownContext.Provider value={{}}>{children}</CountdownContext.Provider>
  );
};
