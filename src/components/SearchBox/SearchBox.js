import { useNote } from 'hooks/noteContext';
// import { BiSearchAlt2 } from 'react-icons/bi';

import { Search } from './SearchBox.styled';
const SearchBox = () => {
  const { filter, setFilter } = useNote();

  const handlerFilters = event => {
    //TODO  одати затримку на виклик
    setFilter(event.target.value);
  };

  return (
    <>
      <Search
        type="text"
        placeholder="Search"
        value={filter}
        onChange={handlerFilters}
      />
    </>
  );
};

export default SearchBox;
