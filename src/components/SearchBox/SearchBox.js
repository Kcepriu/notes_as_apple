import { useNote } from 'hooks/noteContext';
import { IconSearch } from './SearchBox.styled';

import { Search, WrapSearch } from './SearchBox.styled';
const SearchBox = () => {
  const { filter, setFilter } = useNote();

  const handlerFilters = event => {
    //TODO  одати затримку на виклик
    setFilter(event.target.value);
  };

  return (
    <WrapSearch>
      {filter === '' && <IconSearch />}
      <Search
        type="text"
        placeholder="Search"
        value={filter}
        onChange={handlerFilters}
      />
    </WrapSearch>
  );
};

export default SearchBox;
