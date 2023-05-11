import styled from 'styled-components';

export const Container = styled.div`
  padding-left: 90px;
  padding-right: 90px;

  margin-left: auto;
  margin-right: auto;

  @media (max-width: 720px) {
    padding: 0;
  }
`;

export const WraperPage = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* overflow: hidden; */
`;
