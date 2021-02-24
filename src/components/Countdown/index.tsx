import { useState, useEffect, useCallback, useRef } from 'react';
import * as S from './styles';

const Countdown = () => {
  const [time, setTime] = useState(3);

  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  const countDownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startCountdown = useCallback(() => {
    setIsActive(true);
  }, []);

  const resetCountdown = useCallback(() => {
    clearTimeout(countDownTimeout.current);
    setIsActive(false);
    setTime(25 * 60);
  }, []);

  useEffect(() => {
    if (isActive && time > 0) {
      countDownTimeout.current = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
    }
  }, [isActive, time]);

  return (
    <S.Container>
      <div>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <div>
          <button disabled>
            Ciclo encerrado <img src="icons/check-button.svg" alt="" />
          </button>
        </div>
      ) : isActive ? (
        <button className="activeButton" type="button" onClick={resetCountdown}>
          Abandonar o ciclo
        </button>
      ) : (
        <button type="button" onClick={startCountdown}>
          Iniciar um ciclo
        </button>
      )}
    </S.Container>
  );
};

export default Countdown;
