import { Colors } from 'constants/constantsStyle';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
  padding-right: 8px;
  margin: 0;
  gap: 10px;
  height: 100%;
  /* outline: 1px solid red; */
`;

export const Item = styled.li`
  padding: 8px;
  min-height: 30px;
  border: 1px solid ${Colors.backgroundSearch};
  border-radius: 8px;
  cursor: pointer;

  &.Current {
    background-color: ${Colors.bacgroundCurentNote};
  }
`;

export const Content = styled.p`
  /* font-weight: bold; */
`;

export const TimeNote = styled.span`
  font-weight: bold;
`;
