import * as S from './styles';

const ExperienceBar = () => {
  return (
    <S.Container>
      <span>0 xp</span>
      <div>
        <div style={{ width: '50%' }} />

        <span style={{ left: '50%' }}>300 xp</span>
      </div>
      <span>600 xp</span>
    </S.Container>
  );
};

export default ExperienceBar;
