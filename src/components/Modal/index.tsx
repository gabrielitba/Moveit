import React, { useContext } from 'react';
import { ChallengesContext } from '../../context/challenges';

import * as S from './styles';

const Modal = () => {
  const { level, handleCloseModal } = useContext(ChallengesContext);
  return (
    <S.Overlay>
      <S.Container>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level</p>

        <button onClick={handleCloseModal}>
          <img src="/icons/close.svg" alt="Icone de fechar" />
        </button>
      </S.Container>
    </S.Overlay>
  );
};

export default Modal;
