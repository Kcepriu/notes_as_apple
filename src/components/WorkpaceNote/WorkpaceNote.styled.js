import styled from 'styled-components';

export const WrapWorkpaceNote = styled.div`
  height: 100%;
  padding-left: 8px;
  display: flex;
  flex-direction: column;

  outline: 1px solid red;
`;

export const TitleDate = styled.p`
  text-align: center;

  font-size: 24px;
  display: block;

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
