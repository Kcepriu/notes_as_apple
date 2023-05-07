import { useNote } from 'hooks/noteContext';
import WorkpaceNote from 'components/WorkpaceNote/WorkpaceNote';
import ListItem from 'components/ListItem/ListItem';

import {
  WorkspaceStyle,
  WrapListItem,
  WrapWorkpaceNote,
} from './Workspace.styled';

const Workspace = () => {
  const { currentNote } = useNote();

  return (
    <WorkspaceStyle>
      <WrapListItem>
        <ListItem />
      </WrapListItem>
      <WrapWorkpaceNote>{currentNote && <WorkpaceNote />}</WrapWorkpaceNote>
    </WorkspaceStyle>
  );
};

export default Workspace;
