import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;

  background: var(--white);
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  padding: 1.5rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
`;

export const ChallengeNotActive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > strong {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
    max-width: 80%;
    margin-top: 3rem;
  }

  > p {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.4;
    max-width: 80%;
    margin-top: 3rem;

    > img {
      margin-bottom: 1rem;
    }
  }
`;

export const challengeActive = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;

  > header {
    color: var(--blue);
    font-weight: 600;
    font-size: 1.25rem;
    padding-bottom: 1.5rem;
    border-bottom: 3.5px solid var(--blue-twitter);
    align-self: center;
    width: 150%;
  }

  > main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > strong {
      font-size: 2rem;
      font-weight: 600;
      color: var(--title);
      margin: 1.5rem 0 1rem;
    }

    > p {
      line-height: 1.5;
    }
  }

  > footer {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;

    > button {
      height: 3rem;

      display: flex;

      align-items: center;
      justify-content: center;

      border: 0;
      border-radius: 5px;

      color: var(--white);

      font-size: 1rem;
      font-weight: 600;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }

    > button:first-child {
      background: var(--red);
    }

    > button:last-child {
      background: var(--green);
    }
  }
`;
