import { Colors } from 'constants/constantsStyle';
import styled from 'styled-components';

export const WrapWorkpaceNote = styled.div`
  height: 100%;
  padding-left: 8px;
  display: flex;
  flex-direction: column;
`;

export const TitleDate = styled.p`
  display: block;
  text-align: center;

  font-weight: 600;
  font-size: 14px;
  color: ${Colors.colorGray};

  margin-top: 8px;
  margin-bottom: 10px;
`;

export const WrapContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Title = styled.input`
  margin-bottom: 10px;
  border: none;
  &:focus {
    outline: none;
  }
`;

export const Content = styled.textarea`
  flex-grow: 1;
  height: 100%;
  border: none;
  justify-content: start;
  &:focus {
    outline: none;
  }
`;
