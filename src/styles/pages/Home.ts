import styled from 'styled-components';

export const Container = styled.section`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;

  section {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6.25rem;
    align-content: center;

    > div:first-child {
      background: ${(props) => props.theme.colors.backBox};
      padding: 5px;

      border-radius: 5px;
    }
  }
`;
