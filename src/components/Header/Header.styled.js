import { Colors } from 'constants/constantsStyle';
import styled from 'styled-components';

export const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  padding: 4px 4px;
  background-color: ${Colors.backgroundHeader};
  border-bottom: 3px solid ${Colors.borderHeader};

  @media (max-width: 720px) {
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
  }
`;
