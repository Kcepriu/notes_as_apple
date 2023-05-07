import Buttons from 'components/Buttons/Buttons';
import SearchBox from 'components/SearchBox/SearchBox';
import { HeaderStyle } from './Header.styled';

const Header = () => {
  return (
    <HeaderStyle>
      <Buttons />
      <SearchBox />
    </HeaderStyle>
  );
};

export default Header;
