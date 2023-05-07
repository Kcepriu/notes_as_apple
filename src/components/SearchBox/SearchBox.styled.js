import { Colors } from 'constants/constantsStyle';

import styled from 'styled-components';

export const Search = styled.input`
  background-color: ${Colors.backgroundSearch};
  border: none;
  margin-right: 40px;
  border-radius: 4px;
  width: 300px;
  font-size: 18px;
  padding-left: 8px;
  padding-right: 8px;
  ::placeholder {
    text-align: center;
  }
`;
