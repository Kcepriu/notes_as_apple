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
`;

export const Item = styled.li`
  padding: 8px;
  min-height: 30px;
  border: 1px solid ${Colors.backgroundSearch};
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;

  &.Current {
    background-color: ${Colors.bacgroundCurentNote};
  }
`;

export const TitleNote = styled.h3`
  max-width: 100%;
  font-size: 16px;
  font-weight: 600;
  overflow: hidden;
`;

export const Content = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-top: 4px;
`;

export const TimeNote = styled.span`
  font-weight: bold;
  font-size: 14px;
`;
