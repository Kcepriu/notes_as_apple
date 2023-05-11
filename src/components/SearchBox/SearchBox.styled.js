import { Colors } from 'constants/constantsStyle';
import { BiSearchAlt2 } from 'react-icons/bi';

import styled from 'styled-components';

export const WrapSearch = styled.div`
  position: relative;
  width: 300px;
  margin-right: 40px;

  display: flex;
  align-items: center;

  @media (max-width: 720px) {
    max-width: calc(100% - 16px);
    margin: 0;
  }
`;

export const IconSearch = styled(BiSearchAlt2)`
  position: absolute;
  color: ${Colors.colorIconButtonOn};
  left: 50%;
  transform: translateX(-45px);
`;

export const Search = styled.input`
  background-color: ${Colors.backgroundSearch};
  border: none;
  margin: 0;
  /* margin-right: 40px; */
  border-radius: 4px;
  width: 100%;
  max-width: 100%;
  font-size: 18px;
  padding-left: 8px;
  padding-right: 8px;

  ::placeholder {
    text-align: center;
  }
  @media (max-width: 720px) {
    max-width: calc(100% - 16px);
    margin: 0;
  }
`;
