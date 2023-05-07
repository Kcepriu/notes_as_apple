import styled from 'styled-components';

export const WrapWorkpaceNote = styled.div`
  height: 100%;
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
  /* outline: 1px solid red; */
  /* height: 100%; */
  /* justify-content: space-between; */
  max-height: 100%;
`;

export const Title = styled.input`
  margin-bottom: 10px;
`;

export const Content = styled.input`
  flex-grow: 1;
  /* height: calc(100vh - 10px); */
`;
