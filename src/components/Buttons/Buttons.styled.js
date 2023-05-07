import { Colors } from 'constants/constantsStyle';
import styled from 'styled-components';

export const ListButtons = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 4px;
  padding: 0;
  margin: 0;
`;

export const Button = styled.button`
  height: 32px;
  width: 48px;
  font-size: 18px;
  border-radius: 10px;
  background-color: ${Colors.backgroundSearch};
  border: none;
`;
